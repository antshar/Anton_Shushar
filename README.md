# Windows like file structure in OOP

Basic `folder/file/shortcut` structure described using OOP principles.

Everything is inherited from base abstract `Unit` class. `Folder` class is using aggregation hierarchy so that a folder can contain both: files and folders.
Meanwhile inherited `Shortcut` class has composited field that references to its parent and calls the corresponding method according to its implementation.
