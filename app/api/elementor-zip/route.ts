import { NextResponse } from "next/server"
import { readFileSync } from "node:fs"
import { join } from "node:path"
import zlib from "node:zlib"

function buildZip(jsonBuffer: Buffer, entryName: string): Buffer {
  const crc32 = (buf: Buffer): number => {
    let c = ~0
    for (let i = 0; i < buf.length; i++) {
      c ^= buf[i]
      for (let k = 0; k < 8; k++) c = (c >>> 1) ^ (0xedb88320 & -(c & 1))
    }
    return ~c >>> 0
  }

  const crc = crc32(jsonBuffer)
  const comp = zlib.deflateRawSync(jsonBuffer, { level: 9 })
  const nameBuf = Buffer.from(entryName)

  // Local file header
  const lfh = Buffer.alloc(30)
  lfh.writeUInt32LE(0x04034b50, 0)
  lfh.writeUInt16LE(20, 4)
  lfh.writeUInt16LE(8, 8)   // deflate
  lfh.writeUInt32LE(0, 10)  // last mod time/date
  lfh.writeUInt32LE(crc, 14)
  lfh.writeUInt32LE(comp.length, 18)
  lfh.writeUInt32LE(jsonBuffer.length, 22)
  lfh.writeUInt16LE(nameBuf.length, 26)
  lfh.writeUInt16LE(0, 28)  // extra field length
  const local = Buffer.concat([lfh, nameBuf, comp])

  // Central directory
  const cd = Buffer.alloc(46)
  cd.writeUInt32LE(0x02014b50, 0)
  cd.writeUInt16LE(20, 4)
  cd.writeUInt16LE(20, 6)
  cd.writeUInt16LE(8, 10)
  cd.writeUInt32LE(0, 12)   // last mod time/date
  cd.writeUInt32LE(crc, 16)
  cd.writeUInt32LE(comp.length, 20)
  cd.writeUInt32LE(jsonBuffer.length, 24)
  cd.writeUInt16LE(nameBuf.length, 28)
  cd.writeUInt16LE(0, 30)   // extra field
  cd.writeUInt16LE(0, 32)   // file comment
  cd.writeUInt16LE(0, 34)   // disk start
  cd.writeUInt16LE(0, 36)   // internal attrs
  cd.writeUInt32LE(0, 38)   // external attrs
  cd.writeUInt32LE(0, 42)   // relative offset
  const central = Buffer.concat([cd, nameBuf])

  // End of central directory
  const eocd = Buffer.alloc(22)
  eocd.writeUInt32LE(0x06054b50, 0)
  eocd.writeUInt16LE(0, 4)  // disk number
  eocd.writeUInt16LE(0, 6)  // start disk
  eocd.writeUInt16LE(1, 8)  // entries on disk
  eocd.writeUInt16LE(1, 10) // total entries
  eocd.writeUInt32LE(central.length, 12)
  eocd.writeUInt32LE(local.length, 16)
  eocd.writeUInt16LE(0, 20) // comment length

  return Buffer.concat([local, central, eocd])
}

export async function GET() {
  const jsonPath = join(process.cwd(), "public", "paleta-colores-sherwin-williams.json")
  const jsonBuffer = readFileSync(jsonPath)
  const entryName = "paleta-colores-sherwin-williams.json"
  const zip = buildZip(jsonBuffer, entryName)

  return new NextResponse(zip, {
    status: 200,
    headers: {
      "Content-Type": "application/zip",
      "Content-Disposition": `attachment; filename="paleta-colores-sherwin-williams.zip"`,
      "Content-Length": String(zip.length),
    },
  })
}
