import glob
import os
from collections import Counter

post_dir = 'abs/'

filenames = glob.glob(post_dir + '*md') + glob.glob(post_dir + '**/*md')

for filename in filenames:
    f = open(filename, 'r', encoding='utf8')
    crawl = False
    changed = False
    lines = []
    for line in f:
        if crawl:
            current_tags = line.strip().replace('[', '').replace(']','').split(':')
            if current_tags[0] == 'tags':
                tags = current_tags[1].strip().split(',')
                for i in range(len(tags)):
                    tags[i] = tags[i].strip().replace(' ', '-')
                newline = "tags: [" + ', '.join(tags) + "]\n"
                if line != newline:
                    changed = True
                    line = newline
                crawl = False
        lines.append(line)
        if line.strip() == '---':
            if not crawl:
                crawl = True
            else:
                crawl = False
    f.close()

    if changed:
        print("replacing tags in", filename)
        fout = open(filename, "w", encoding='utf8')
        fout.write(''.join(lines))
        fout.close()
