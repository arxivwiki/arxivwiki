import os.path

with open('pairs.txt', 'r') as f:
    contents = f.readlines()

    for c in contents:
        arr = c.split(',')
        if arr[0] == 'undefined':
            continue
        fname = arr[0].split("arxiv.org/")[1] + '.md'
        text = "[Kurin's notes linked here](%s)" % arr[1].strip()

        # skip if has "Kurin"
        if os.path.isfile(fname):
            with open(fname, "r")  as f:
                info = f.readlines()
                if 'Kurin' in ''.join(info):
                    print("skipping: " + fname)
                    continue

        with open(fname, "a")  as f:
            print("writing to: " + fname)
            f.write(text + '\n')
