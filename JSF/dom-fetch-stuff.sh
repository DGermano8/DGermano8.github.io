#!/usr/bin/env bash

#!/usr/bin/env bash

# This script is used to fetch the latest version of the the documentation

doc_home="/Users/domenicgermano/Desktop/SIR_RA_LIT/Code/jsf/build/html/*"

# do a logical check that the doc_home is not an empty directory
if [ -z "$(ls -A $doc_home)" ]; then
    echo "The directory is empty"
    exit 1
fi

cp -r $doc_home ./

# rename all directories starting with "_" to remove the underscore
find . -type d -name "_*" -exec bash -c 'mv "$0" "${0/_/}"' {} \;

# mv _images images
# mv _sources sources
# mv _static static


# Using sed, rename all arguments to href and src attributes to remove the prefix underscore from _images, _sources, and _static.
# This is done to make the links work in the local copy of the documentation.

sed -i '' 's/href="_images/href="images/g' *.html
sed -i '' 's/href="_sources/href="sources/g' *.html
sed -i '' 's/href="_static/href="static/g' *.html
sed -i '' 's/src="_images/src="images/g' *.html
sed -i '' 's/src="_sources/src="sources/g' *.html
sed -i '' 's/src="_static/src="static/g' *.html

