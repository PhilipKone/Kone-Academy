import csv
import sys

def convert_csv_to_ris(csv_file, ris_file):
    """Convert literature matrix CSV to RIS format"""
    
    with open(csv_file, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        rows = list(reader)
    
    with open(ris_file, 'w', encoding='utf-8') as f:
        for i, row in enumerate(rows, 1):
            # Determine reference type
            if 'Journal' in row['Journal/Source'] or 'Proceedings' in row['Journal/Source']:
                ref_type = 'JOUR'
            elif 'Book' in row['Journal/Source'] or 'Handbook' in row['Journal/Source']:
                ref_type = 'BOOK'
            else:
                ref_type = 'JOUR'
            
            f.write(f'TY  - {ref_type}\n')
            f.write(f'TI  - {row["Title"]}\n')
            
            # Handle multiple authors
            authors = row['Authors'].split(',')
            for author in authors:
                author = author.strip()
                if author:
                    f.write(f'AU  - {author}\n')
            
            f.write(f'PY  - {row["Year"]}\n')
            f.write(f'DA  - {row["Year"]}///\n')
            
            if row['Journal/Source']:
                f.write(f'JO  - {row["Journal/Source"]}\n')
                f.write(f'JF  - {row["Journal/Source"]}\n')
            
            if row['Volume']:
                f.write(f'VL  - {row["Volume"]}\n')
            
            if row['Issue']:
                f.write(f'IS  - {row["Issue"]}\n')
            
            if row['Pages']:
                if '-' in str(row['Pages']):
                    pages = str(row['Pages']).split('-')
                    f.write(f'SP  - {pages[0]}\n')
                    if len(pages) > 1:
                        f.write(f'EP  - {pages[1]}\n')
                else:
                    f.write(f'SP  - {row["Pages"]}\n')
            
            if row['DOI']:
                f.write(f'DO  - {row["DOI"]}\n')
            
            f.write(f'ER  -\n')
            f.write('\n')
            
            if i % 10 == 0:
                print(f"Processed {i}/{len(rows)} references...")
    
    print(f"\n✅ Successfully converted {len(rows)} references to RIS format!")
    print(f"Output saved to: {ris_file}")

if __name__ == '__main__':
    import os
    base_dir = os.path.dirname(os.path.abspath(__file__))
    csv_file = os.path.join(base_dir, 'literature_matrix.csv')
    ris_file = os.path.join(base_dir, 'literature_matrix.ris')
    convert_csv_to_ris(csv_file, ris_file)
