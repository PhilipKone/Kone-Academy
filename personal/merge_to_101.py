#!/usr/bin/env python3
"""
Merge the 34 analyzed papers with all 101 papers to create complete detailed matrix.
"""
import csv
import os

def read_csv_as_dict(filepath):
    """Read CSV and return list of dictionaries."""
    with open(filepath, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        return list(reader)

def main():
    base_dir = os.path.dirname(os.path.abspath(__file__))
    
    # Read the 34 analyzed papers
    detailed_path = os.path.join(base_dir, 'literature_matrix_detailed.csv')
    detailed_data = read_csv_as_dict(detailed_path)
    
    # Create lookup by title
    analyzed_lookup = {}
    for row in detailed_data:
        title = row.get('Title', '').strip()
        if title:
            analyzed_lookup[title] = row
    
    # Read all 101 papers
    full_path = os.path.join(base_dir, 'literature_matrix.csv')
    with open(full_path, 'r', encoding='utf-8') as f:
        reader = csv.reader(f)
        header = next(reader)
        all_papers = list(reader)
    
    # Remove empty rows
    all_papers = [row for row in all_papers if any(cell.strip() for cell in row)]
    
    # Map basic CSV columns to detailed columns
    # Basic: Category,Subcategory,Authors,Year,Title,Journal/Source,Volume,Issue,Pages,DOI,APA_Reference
    # Detailed: Category,Subcategory,Authors,Title,Journal Name,Publishing House,Year,Volume,Issue,Pages,DOI,Problem Solved,Method Used,Data & Availability,Performance Metrics & Values,Future Works,Limitations,Critique,APA_Reference
    
    basic_to_detailed = {
        'Category': 'Category',
        'Subcategory': 'Subcategory', 
        'Authors': 'Authors',
        'Year': 'Year',
        'Title': 'Title',
        'Journal/Source': 'Journal Name',
        'Volume': 'Volume',
        'Issue': 'Issue',
        'Pages': 'Pages',
        'DOI': 'DOI',
        'APA_Reference': 'APA_Reference'
    }
    
    # Create new detailed header
    detailed_header = [
        'Category', 'Subcategory', 'Authors', 'Title', 'Journal Name', 'Publishing House',
        'Year', 'Volume', 'Issue', 'Pages', 'DOI',
        'Problem Solved', 'Method Used', 'Data & Availability',
        'Performance Metrics & Values', 'Future Works', 'Limitations', 'Critique',
        'APA_Reference'
    ]
    
    # Process each paper
    output_rows = []
    matched_count = 0
    
    for row in all_papers:
        if len(row) < 11:
            continue  # Skip incomplete rows
            
        # Extract basic data
        category = row[0] if len(row) > 0 else ''
        subcategory = row[1] if len(row) > 1 else ''
        authors = row[2] if len(row) > 2 else ''
        year = row[3] if len(row) > 3 else ''
        title = row[4] if len(row) > 4 else ''
        journal = row[5] if len(row) > 5 else ''
        volume = row[6] if len(row) > 6 else ''
        issue = row[7] if len(row) > 7 else ''
        pages = row[8] if len(row) > 8 else ''
        doi = row[9] if len(row) > 9 else ''
        apa_ref = row[10] if len(row) > 10 else ''
        
        # Check if we have analysis for this paper
        analyzed_row = analyzed_lookup.get(title.strip())
        
        if analyzed_row:
            # Use the analyzed data
            output_row = [
                analyzed_row.get('Category', category),
                analyzed_row.get('Subcategory', subcategory),
                analyzed_row.get('Authors', authors),
                analyzed_row.get('Title', title),
                analyzed_row.get('Journal Name', journal),
                analyzed_row.get('Publishing House', ''),
                analyzed_row.get('Year', year),
                analyzed_row.get('Volume', volume),
                analyzed_row.get('Issue', issue),
                analyzed_row.get('Pages', pages),
                analyzed_row.get('DOI', doi),
                analyzed_row.get('Problem Solved', ''),
                analyzed_row.get('Method Used', ''),
                analyzed_row.get('Data & Availability', ''),
                analyzed_row.get('Performance Metrics & Values', ''),
                analyzed_row.get('Future Works', ''),
                analyzed_row.get('Limitations', ''),
                analyzed_row.get('Critique', ''),
                analyzed_row.get('APA_Reference', apa_ref)
            ]
            matched_count += 1
        else:
            # Create empty analysis row
            output_row = [
                category, subcategory, authors, title, journal, '',
                year, volume, issue, pages, doi,
                '', '', '', '', '', '', '',  # Empty analysis columns
                apa_ref
            ]
        
        output_rows.append(output_row)
    
    # Write output
    output_path = os.path.join(base_dir, 'literature_matrix_detailed.csv')
    with open(output_path, 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerow(detailed_header)
        writer.writerows(output_rows)
    
    print(f'✅ Created detailed matrix with {len(output_rows)} papers')
    print(f'   - {matched_count} papers with full analysis')
    print(f'   - {len(output_rows) - matched_count} papers with bibliographic data only')
    print(f'   - Ready for you to fill in remaining analysis columns')
    print(f'\nOutput: {output_path}')

if __name__ == '__main__':
    main()
