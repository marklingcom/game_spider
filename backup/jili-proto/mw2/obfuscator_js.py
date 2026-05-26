import os

for root, dirs, files in os.walk('./'):
    for file in files:
        if file.endswith('.js') and not file.endswith('.out.js'):
            file_path = os.path.join(root, file)
            file_path = file_path.replace("\\", "/")
            os.system('obfuscator-io-deobfuscator ' + file_path + ' -o ' + file_path.replace('.js', '.out.js') )