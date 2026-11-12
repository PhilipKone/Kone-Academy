#!/usr/bin/env python3
"""
Convert detailed literature matrix CSV to RIS format.
"""
import csv
import os

def parse_authors(author_string):
    """Parse author string into list of individual authors."""
    if not author_string or author_string.strip() == '':
        return []
    
    # Handle "et al." cases
    if 'et al.' in author_string.lower():
        # Extract main author before et al.
        parts = author_string.split('et al.')[0].strip()
        if ' ' in parts:
            return [parts.rstrip(', ')]
        return [parts]
    
    # Split by common delimiters
    authors = []
    for delim in ['; ', ' and ', ', and ', ', ']:
        if delim in author_string:
            authors = [a.strip() for a in author_string.split(delim) if a.strip()]
            break
    
    if not authors:
        authors = [author_string.strip()]
    
    return authors

def create_ris_entry(row):
    """Convert a CSV row to RIS format."""
    ris = []
    
    # Determine reference type
    ref_type = 'JOUR' if row.get('Journal Name') else 'BOOK'
    ris.append(f'TY  - {ref_type}')
    
    # Title
    if row.get('Title'):
        ris.append(f'TI  - {row["Title"]}')
    
    # Authors
    authors = parse_authors(row.get('Authors', ''))
    for author in authors:
        ris.append(f'AU  - {author}')
    
    # Year
    if row.get('Year'):
        ris.append(f'PY  - {row["Year"]}')
        ris.append(f'DA  - {row["Year"]}///')
    
    # Journal/Publisher info
    if row.get('Journal Name'):
        ris.append(f'JO  - {row["Journal Name"]}')
        ris.append(f'JF  - {row["Journal Name"]}')
    
    if row.get('Publishing House'):
        ris.append(f'PB  - {row["Publishing House"]}')
    
    # Volume
    if row.get('Volume'):
        ris.append(f'VL  - {row["Volume"]}')
    
    # Issue
    if row.get('Issue'):
        ris.append(f'IS  - {row["Issue"]}')
    
    # Pages
    if row.get('Pages'):
        pages = row['Pages'].split('-')
        if len(pages) == 2:
            ris.append(f'SP  - {pages[0]}')
            ris.append(f'EP  - {pages[1]}')
        else:
            ris.append(f'SP  - {row["Pages"]}')
    
    # DOI
    if row.get('DOI'):
        ris.append(f'DO  - {row["DOI"]}')
    
    # Keywords (from Category and Subcategory)
    if row.get('Category'):
        ris.append(f'KW  - {row["Category"]}')
    if row.get('Subcategory'):
        ris.append(f'KW  - {row["Subcategory"]}')
    
    # Notes with analysis
    notes = []
    if row.get('Problem Solved'):
        notes.append(f'Problem: {row["Problem Solved"]}')
    if row.get('Method Used'):
        notes.append(f'Method: {row["Method Used"]}')
    if row.get('Data & Availability'):
        notes.append(f'Data: {row["Data & Availability"]}')
    if row.get('Performance Metrics & Values'):
        notes.append(f'Results: {row["Performance Metrics & Values"]}')
    if row.get('Limitations'):
        notes.append(f'Limitations: {row["Limitations"]}')
    if row.get('Critique'):
        notes.append(f'Critique: {row["Critique"]}')
    if row.get('Future Works'):
        notes.append(f'Future: {row["Future Works"]}')
    
    if notes:
        ris.append(f'N1  - {" | ".join(notes)}')
    
    # Abstract placeholder for detailed analysis
    if row.get('Problem Solved'):
        abstract = f"This paper addresses: {row['Problem Solved']}"
        if row.get('Method Used'):
            abstract += f" Method: {row['Method Used']}"
        if row.get('Performance Metrics & Values'):
            abstract += f" Key findings: {row['Performance Metrics & Values']}"
        ris.append(f'AB  - {abstract}')
    
    ris.append('ER  -')
    return '\n'.join(ris)

def csv_to_ris(csv_file, ris_file):
    """Convert CSV file to RIS format."""
    with open(csv_file, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        rows = list(reader)
    
    ris_entries = []
    for i, row in enumerate(rows, 1):
        try:
            ris_entry = create_ris_entry(row)
            ris_entries.append(ris_entry)
            print(f'Processed {i}/{len(rows)} references...')
        except Exception as e:
            print(f'Error processing row {i}: {e}')
            continue
    
    with open(ris_file, 'w', encoding='utf-8') as f:
        f.write('\n\n'.join(ris_entries))
    
    print(f'\n✅ Successfully converted {len(ris_entries)} references to RIS format!')
    print(f'Output saved to: {os.path.abspath(ris_file)}')

if __name__ == '__main__':
    base_dir = os.path.dirname(os.path.abspath(__file__))
    csv_file = os.path.join(base_dir, 'literature_matrix_detailed.csv')
    ris_file = os.path.join(base_dir, 'literature_matrix_detailed.ris')
    
    csv_to_ris(csv_file, ris_file)
