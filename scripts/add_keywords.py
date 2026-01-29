"""Add keywords to MDX articles that are missing them."""
import os
import re
import glob

STOP_WORDS = {
    'a', 'an', 'the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for',
    'of', 'with', 'by', 'from', 'is', 'are', 'was', 'were', 'be', 'been',
    'being', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would',
    'could', 'should', 'may', 'might', 'shall', 'can', 'need', 'dare',
    'ought', 'used', 'it', 'its', 'this', 'that', 'these', 'those', 'i',
    'me', 'my', 'we', 'our', 'you', 'your', 'he', 'him', 'his', 'she',
    'her', 'they', 'them', 'their', 'what', 'which', 'who', 'whom',
    'how', 'why', 'when', 'where', 'not', 'no', 'nor', 'as', 'if',
    'then', 'than', 'too', 'very', 'just', 'about', 'above', 'after',
    'again', 'all', 'also', 'am', 'any', 'because', 'before', 'below',
    'between', 'both', 'each', 'few', 'further', 'here', 'into', 'more',
    'most', 'other', 'out', 'over', 'own', 'same', 'so', 'some', 'such',
    'through', 'under', 'until', 'up', 'while', 'only', 'vs', 'top',
    'complete', 'guide', 'best', 'new', 'right', 'every',
}

CATEGORY_KEYWORDS = {
    'product': ['healthcare software', 'medical software'],
    'company': ['healthcare technology', 'medical technology'],
    'industry': ['healthcare industry', 'health tech trends'],
    'press': ['healthcare news', 'medical software news'],
    'comparison': ['software comparison', 'healthcare software comparison'],
}

# Contextual keyword sets based on slug/title patterns
CONTEXT_KEYWORDS = {
    'pharmacy': ['pharmacy software', 'pharmacy management'],
    'pharmapos': ['PharmaPOS', 'pharmacy POS system'],
    'hospital': ['hospital software', 'hospital management system'],
    'hospitalos': ['HospitalOS', 'hospital management'],
    'clinic': ['clinic software', 'clinic management'],
    'emr': ['EMR software', 'electronic medical records'],
    'ehr': ['EHR system', 'electronic health records'],
    'inventory': ['inventory management', 'stock management'],
    'billing': ['medical billing', 'healthcare billing'],
    'patient': ['patient management', 'patient records'],
    'africa': ['healthcare Africa', 'medical software Africa'],
    'nigeria': ['healthcare Nigeria', 'software Nigeria'],
    'kenya': ['healthcare Kenya', 'software Kenya'],
    'ghana': ['healthcare Ghana', 'software Ghana'],
    'india': ['healthcare India', 'software India'],
    'uganda': ['healthcare Uganda', 'software Uganda'],
    'south-africa': ['healthcare South Africa', 'software South Africa'],
    'middle-east': ['healthcare Middle East'],
    'dubai': ['healthcare UAE', 'software Dubai'],
    'saudi': ['healthcare Saudi Arabia'],
    'offline': ['offline software', 'offline capability'],
    'cloud': ['cloud healthcare', 'cloud software'],
    'ai': ['AI healthcare', 'artificial intelligence medical'],
    'telemedicine': ['telemedicine software', 'telehealth'],
    'mobile': ['mobile healthcare', 'mHealth'],
    'laboratory': ['laboratory software', 'lab management'],
    'radiology': ['radiology software', 'PACS system'],
    'dental': ['dental software', 'dental practice management'],
    'ophthalmology': ['ophthalmology software', 'eye clinic software'],
    'dermatology': ['dermatology software', 'skin clinic software'],
    'pediatric': ['pediatric software', 'children hospital software'],
    'maternity': ['maternity software', 'obstetrics software'],
    'cardiology': ['cardiology software', 'cardiac care software'],
    'oncology': ['oncology software', 'cancer care software'],
    'orthopedic': ['orthopedic software', 'bone clinic software'],
    'open-source': ['open source healthcare', 'open source HMS'],
    'alternative': ['software alternatives', 'software comparison'],
    'alternatives': ['software alternatives', 'software comparison'],
    'comparison': ['software comparison 2026'],
    'pricing': ['software pricing', 'healthcare software cost'],
    'compliance': ['healthcare compliance', 'regulatory compliance'],
    'hipaa': ['HIPAA compliance', 'HIPAA software'],
    'insurance': ['insurance billing', 'insurance claims software'],
    'appointment': ['appointment scheduling', 'booking system'],
    'prescription': ['prescription management', 'e-prescribing'],
    'pos': ['point of sale', 'POS system'],
    'erp': ['hospital ERP', 'healthcare ERP'],
    'data': ['healthcare data', 'medical data management'],
    'security': ['healthcare security', 'medical data security'],
    'interoperability': ['HL7 integration', 'healthcare interoperability'],
    'multi-branch': ['multi-location software', 'chain management'],
    'rural': ['rural healthcare', 'rural hospital software'],
    'developing': ['developing countries healthcare'],
    'free': ['free healthcare software', 'affordable medical software'],
    'small': ['small practice software', 'small clinic software'],
    'enterprise': ['enterprise healthcare', 'enterprise HMS'],
    'migration': ['software migration', 'data migration'],
    'implementation': ['software implementation', 'HMS deployment'],
    'training': ['software training', 'staff training'],
    'roi': ['healthcare ROI', 'software ROI'],
    'revenue': ['revenue cycle management'],
    'workflow': ['clinical workflow', 'healthcare workflow'],
    'digital': ['digital health', 'digital transformation healthcare'],
    'automation': ['healthcare automation', 'workflow automation'],
    'analytics': ['healthcare analytics', 'medical analytics'],
    'reporting': ['healthcare reporting', 'medical reports'],
    'success': ['customer success', 'case study'],
    'case-study': ['case study', 'success story'],
    'customer': ['customer success story'],
    'glossary': ['healthcare glossary', 'medical terminology'],
}

# Well-known product names that should stay together
PRODUCT_NAMES = [
    'pharmapos', 'hospitalos', 'meditech', 'allscripts', 'epic', 'cerner',
    'mckesson', 'athenahealth', 'drchrono', 'kareo', 'eclinicalworks',
    'nextgen', 'greenway', 'practice fusion', 'veradigm', 'openmrs',
    'bahmni', 'gnu health', 'openemr', 'oscar', 'danphe', 'hmis',
    'bestrx', 'pioneerrx', 'rx30', 'liberty', 'winpharm', 'computer-rx',
]


def extract_title_keywords(title):
    """Extract meaningful words from the title."""
    # Remove year patterns and common suffixes
    title_clean = re.sub(r'\b20\d{2}\b', '', title)
    title_clean = re.sub(r'[:\[\]\(\)"|,]', ' ', title_clean)
    words = title_clean.lower().split()
    keywords = []
    for w in words:
        w = w.strip('-').strip()
        if w and w not in STOP_WORDS and len(w) > 2:
            keywords.append(w)
    return keywords


def generate_keywords(title, category, slug):
    """Generate a list of 4-8 keywords for an article."""
    keywords = set()

    # 1. Add category-specific keywords
    cat_kws = CATEGORY_KEYWORDS.get(category, ['healthcare software'])
    for kw in cat_kws:
        keywords.add(kw)

    # 2. Add context keywords based on slug
    slug_lower = slug.lower()
    for pattern, kws in CONTEXT_KEYWORDS.items():
        if pattern in slug_lower:
            for kw in kws:
                keywords.add(kw)

    # 3. Build a compound keyword from the title
    title_words = extract_title_keywords(title)
    if len(title_words) >= 2:
        # Take first few meaningful words as a phrase keyword
        phrase = ' '.join(title_words[:4])
        keywords.add(phrase)

    # 4. Check for product names in slug/title
    combined = (slug + ' ' + title).lower()
    for product in PRODUCT_NAMES:
        if product in combined:
            if product == 'pharmapos':
                keywords.add('PharmaPOS')
            elif product == 'hospitalos':
                keywords.add('HospitalOS')
            else:
                keywords.add(product)

    # 5. Add "2026" variant if title mentions year
    if '2026' in title:
        # Find a main topic keyword and append 2026
        for kw in list(keywords)[:2]:
            if '2026' not in kw:
                keywords.add(f'{kw} 2026')
                break

    # 6. Ensure we have 4-8 keywords
    kw_list = list(keywords)

    # If too few, add slug-derived keywords
    if len(kw_list) < 4:
        slug_parts = slug.replace('-', ' ').split()
        slug_parts = [w for w in slug_parts if w not in STOP_WORDS and len(w) > 2 and w not in ('mdx', '2026')]
        if slug_parts:
            kw_list.append(' '.join(slug_parts[:3]))

    # Trim to 8 max
    kw_list = kw_list[:8]

    return kw_list


def process_article(filepath):
    """Add keywords to an article if missing."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Check if already has keywords
    fm_match = re.match(r'^---\n(.*?)\n---', content, re.DOTALL)
    if not fm_match:
        return False

    frontmatter = fm_match.group(1)
    if 'keywords' in frontmatter:
        return False

    # Extract title and category
    title_match = re.search(r'title:\s*"([^"]*)"', frontmatter)
    cat_match = re.search(r'category:\s*"([^"]*)"', frontmatter)

    title = title_match.group(1) if title_match else ''
    category = cat_match.group(1) if cat_match else 'industry'
    slug = os.path.splitext(os.path.basename(filepath))[0]

    keywords = generate_keywords(title, category, slug)

    # Format as JSON array
    kw_str = ', '.join(f'"{kw}"' for kw in keywords)
    keywords_line = f'keywords: [{kw_str}]'

    # Insert keywords after the last frontmatter field (before closing ---)
    new_frontmatter = frontmatter.rstrip() + '\n' + keywords_line
    new_content = content[:fm_match.start(1)] + new_frontmatter + content[fm_match.end(1):]

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)

    return True


def main():
    articles_dir = os.path.join('src', 'content', 'articles')
    files = sorted(glob.glob(os.path.join(articles_dir, '*.mdx')))

    updated = 0
    skipped = 0
    for f in files:
        if process_article(f):
            updated += 1
            print(f'  Added keywords: {os.path.basename(f)}')
        else:
            skipped += 1

    print(f'\nDone. Updated: {updated}, Already had keywords: {skipped}')
    print(f'Total: {updated + skipped}')


if __name__ == '__main__':
    main()
