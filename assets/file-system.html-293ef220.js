const e=JSON.parse('{"key":"v-18cc1bd0","path":"/posts/others/file-system.html","title":"文件系统","lang":"zh-CN","frontmatter":{"date":"2023-08-03T00:00:00.000Z","category":"其他","description":"文件系统 一、文件系统的定义 文件系统是操作系统用于明确存储设备（常见的是磁盘，也有基于 NAND Flash 的固态硬盘）或分区上的文件的方法和数据结构；即在存储设备上组织文件的方法。操作系统中负责管理和存储文件信息的软件机构称为文件管理系统，简称文件系统。文件系统由三部分组成：文件系统的接口，对对象操纵和管理的软件集合，对象及属性。 二、常见的文件系统 2.1 Windows 下常见的文件系统 FAT 在 Win 9X 下，FAT16 支持的分区最大为 2GB。我们知道计算机将信息保存在硬盘上称为“簇”的区域内。使用的簇越小，保存信息的效率就越高。在 FAT16 的情况下，分区越大簇就相应的要大，存储效率就越低，势必造成存储空间的浪费。并且随着计算机硬件和应用的不断提高，FAT16 文件系统已不能很好地适应系统的要求。在这种情况下，推出了增强的文件系统 FAT32。","head":[["meta",{"property":"og:url","content":"https://rocyan.top/posts/others/file-system.html"}],["meta",{"property":"og:site_name","content":"小严学习日记"}],["meta",{"property":"og:title","content":"文件系统"}],["meta",{"property":"og:description","content":"文件系统 一、文件系统的定义 文件系统是操作系统用于明确存储设备（常见的是磁盘，也有基于 NAND Flash 的固态硬盘）或分区上的文件的方法和数据结构；即在存储设备上组织文件的方法。操作系统中负责管理和存储文件信息的软件机构称为文件管理系统，简称文件系统。文件系统由三部分组成：文件系统的接口，对对象操纵和管理的软件集合，对象及属性。 二、常见的文件系统 2.1 Windows 下常见的文件系统 FAT 在 Win 9X 下，FAT16 支持的分区最大为 2GB。我们知道计算机将信息保存在硬盘上称为“簇”的区域内。使用的簇越小，保存信息的效率就越高。在 FAT16 的情况下，分区越大簇就相应的要大，存储效率就越低，势必造成存储空间的浪费。并且随着计算机硬件和应用的不断提高，FAT16 文件系统已不能很好地适应系统的要求。在这种情况下，推出了增强的文件系统 FAT32。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-22T09:03:56.000Z"}],["meta",{"property":"article:author","content":"Roc Yan"}],["meta",{"property":"article:published_time","content":"2023-08-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-22T09:03:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"文件系统\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-08-03T00:00:00.000Z\\",\\"dateModified\\":\\"2023-11-22T09:03:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Roc Yan\\",\\"url\\":\\"https://rocyan.top\\",\\"email\\":\\"qpyan23@m.fudan.edu.cn\\"}]}"]]},"headers":[{"level":2,"title":"一、文件系统的定义","slug":"一、文件系统的定义","link":"#一、文件系统的定义","children":[]},{"level":2,"title":"二、常见的文件系统","slug":"二、常见的文件系统","link":"#二、常见的文件系统","children":[{"level":3,"title":"2.1 Windows 下常见的文件系统","slug":"_2-1-windows-下常见的文件系统","link":"#_2-1-windows-下常见的文件系统","children":[]},{"level":3,"title":"FAT","slug":"fat","link":"#fat","children":[]},{"level":3,"title":"NTFS（目前常用）","slug":"ntfs-目前常用","link":"#ntfs-目前常用","children":[]},{"level":3,"title":"exFAT（与 mac 文件系统兼容）","slug":"exfat-与-mac-文件系统兼容","link":"#exfat-与-mac-文件系统兼容","children":[]},{"level":3,"title":"2.2 Linux 下常见的文件系统","slug":"_2-2-linux-下常见的文件系统","link":"#_2-2-linux-下常见的文件系统","children":[]},{"level":3,"title":"EXt（RHEL6 中使用）","slug":"ext-rhel6-中使用","link":"#ext-rhel6-中使用","children":[]},{"level":3,"title":"XFS（RHEL7 中使用）","slug":"xfs-rhel7-中使用","link":"#xfs-rhel7-中使用","children":[]},{"level":3,"title":"对比","slug":"对比","link":"#对比","children":[]}]},{"level":2,"title":"2.3 MacOS下常见的文件系统","slug":"_2-3-macos下常见的文件系统","link":"#_2-3-macos下常见的文件系统","children":[{"level":3,"title":"APFS","slug":"apfs","link":"#apfs","children":[]},{"level":3,"title":"Mac OS 扩展","slug":"mac-os-扩展","link":"#mac-os-扩展","children":[]}]}],"git":{"createdTime":1700643836000,"updatedTime":1700643836000,"contributors":[{"name":"Yan","email":"rocyan98@gmail.com","commits":1}]},"readingTime":{"minutes":3.36,"words":1008},"filePathRelative":"posts/others/file-system.md","localizedDate":"2023年8月3日","excerpt":"<h1> 文件系统</h1>\\n<h2> 一、文件系统的定义</h2>\\n<ul>\\n<li>文件系统是操作系统用于明确存储设备（常见的是磁盘，也有基于 NAND Flash 的固态硬盘）或分区上的文件的方法和数据结构；即在存储设备上组织文件的方法。操作系统中负责管理和存储文件信息的软件机构称为文件管理系统，简称文件系统。文件系统由三部分组成：文件系统的接口，对对象操纵和管理的软件集合，对象及属性。</li>\\n</ul>\\n<h2> 二、常见的文件系统</h2>\\n<h3> 2.1 Windows 下常见的文件系统</h3>\\n<h3> FAT</h3>\\n<p>在 Win 9X 下，FAT16 支持的分区最大为 2GB。我们知道计算机将信息保存在硬盘上称为“簇”的区域内。使用的簇越小，保存信息的效率就越高。在 FAT16 的情况下，分区越大簇就相应的要大，存储效率就越低，势必造成存储空间的浪费。并且随着计算机硬件和应用的不断提高，FAT16 文件系统已不能很好地适应系统的要求。在这种情况下，推出了增强的文件系统 FAT32。</p>","autoDesc":true}');export{e as data};
