#!/usr/bin/env bash
# SPDX-License-Identifier: BSD-3-Clause
# Copyright 2022, Intel Corporation

git clone https://github.com/chorig9/CacheLib-1 CacheLib
cd CacheLib
git checkout main
cd ..

./CacheLib/contrib/prerequisites-centos8.sh

for pkg in zstd googleflags googlelog googletest sparsemap fmt folly fizz wangle fbthrift ;
do
    sudo ./CacheLib/contrib/build-package.sh -j -I /opt/ "$pkg"
done

rm -rf CacheLib
