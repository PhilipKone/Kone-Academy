import base64
import binascii

LOGO_B64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAJdklEQVR4AeRbXWwcVxU+d9Y2jpN6nZBNHUhACrumNEVCpA1UUBAkQkgFmgeoKpH0zykiEkG8JC0pUJWWolLxFIlIxE5RG5UHJBQoEgUlFUiQ0kADqGpK7Q2qWkuJazeJt6nbrJ2Znm9mZ3rnzpm7M+t1YqurPTvnnvOd7/zM3+5Ydug9/rqkA/j4jnPLP7J9YkPljomvlLdPbh24c+IuCHTY4APmUu6TeR0AGqpsn9g1MDhxqDI48erb9Zkzjkf/IoeeVJ73uKfolxDosMEHDLB+DMeCYz4H0vYBlO94/ery4ORDlcHXRtEQefQzj+gmbmINS9b3Gj+GY8EBLnCCOytBVlzbBjAwOLmJ5ZBy3BcUed8nUmVq20uVwQlu5GDZ1C7qOQ8Ah+jA9slDHnmHWbCn21WbyIMcLIeRE7lFUA7jnAbAe+IhHKKe581742ZPyIncqMH05Vm3NABMvnLnxDHeE3yo50nXfixqQC2oqRX23AMoD45v48kfI0XXtZJwXmK4FtSE2vLy5xpAZXB8tyLnMSK+afHHAns7imtDjZTjlXkA5cGJH3HfD+fgvkxQ5+Gg1mzpMw2g4u95uj8b5eVHKaL7UXOWSpoOIDivnEWw5812cSSMbzOt5to6AFxZFTm/okX6Uhw7eiDLy7H4yHFpH/utGPYv5LfT6CG1xtTmBvj7PPHtJTVSc3x2fRcd3FX05eVh9Tf0lVwh3mQMxM79+D30gCbG3EAOGzwBcMES+uBDxboJ7cto40f7fTlQdZ3fq1Hgs7JBk5wh3mQE7mzkKIX9CRhxQEUSP1QAku2G67potUr4jRrSwUJmrCtuMIhSMIhGExO5ERuASqaCik9xSvnUD5cNuF7NquZ3tdWOhO4DxgDSQDYcMUSRUPf6/UFOpusb4lTyp1Ggp7Qm+lPDIABO1kyvzcIA3jmfzNN4399Tx9d8+EOX6A3C5A4pdxNeBK9xQaABw58vtzUhCRy43zsW8pfOyJLoDzzon0AD966jPTzFzpsQbT8KXEiN2qQI5JW9IYedU9sAOR4W3VnM/1TfOEzMfVZj45X0wdw2+YldPPnkncK2OAz+cI1OMEdrsOtVEPoE7dGj7EBKHK/IQalGKXk0p4Kwz+xroPuvWVpuExs4QMm4WgYJG6phgZc3Jg9RgMIbhMq12Ms6Rz8h+X833PLMrEo3WjDSNxSDTpfUlfloNfAEw2AlS8GpmyfOPcKHGSipb0EzF1fXkK2vQsMBBhgoZsicaMG1GJibWsuO+qV9QCqPPpMoGX7LPYkL344R0+8Mps8kBrOsv0De/kLzq2wqEDzGIha6LlEOqRY8R9DWNnoNHW9MzM+sEkNVUFO7/p4QB2G5t1gTslGKlHFItHG59hz37R4BzkVZb0YKzt8cPjXmkw/PGje+LYfIspFgph1RLszxhz34XXkH1NQsw/UXxFLgYg1030CmeKjGQZYFDGxw65PTZeA4D7I+u/VYpVQAAAABJRU5ErkJggg=="

def debug_hex():
    try:
        if "base64," in LOGO_B64:
            clean_b64 = LOGO_B64.split("base64,")[1]
        else:
            clean_b64 = LOGO_B64.strip()
            
        data = base64.b64decode(clean_b64)
        print(f"Decoded {len(data)} bytes.")
        print(f"First 16 bytes hex: {binascii.hexlify(data[:16])}")
        
        # Valid PNG magic: 89 50 4E 47 0D 0A 1A 0A
        expected = b'\x89\x50\x4e\x47\x0d\x0a\x1a\x0a'
        if data[:8] == expected:
            print("MAGIC BYTES MATCH: PNG signature detected.")
            # Try to open with PIL
            import io
            from PIL import Image
            try:
                img = Image.open(io.BytesIO(data))
                img.load()
                print("PIL Image.open SUCCESS")
            except Exception as e:
                print(f"PIL Image.open FAILED: {e}")
        else:
            print(f"MAGIC BYTES MISMATCH: Expected {binascii.hexlify(expected)}, got {binascii.hexlify(data[:8])}")
            
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    debug_hex()
