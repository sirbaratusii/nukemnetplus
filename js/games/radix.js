module.exports = {
    "resourceFolders": [
        "maps",
        "mods"
    ],
    "name": "Radix: Beyond the Void",
    "executables": {
        "shareware2_0": {
            "name": "Shareware v2.0 (DOS)",
            "files": {
                "setup": {
                    "path": "SETUP.EXE"
                },
                "main": {
                    "path": "RADIX.EXE"
                }
            },
            "runnables": {
                "multiplayer": {
                    "file": "main",
                    "runTool": {
                        "type": "dosbox",
                        "data": {
                            "commands": [
                                "CONFIG -set \"\""
                            ],
                    "net": [
                        "ipx",
                        "serial:9600",
                        "serial:14400",
                        "serial:19200",
                        "serial:38400",
                        "serial:57600"
                    ],
                            "args": [
                                "-machine",
                                "vesa_nolfb"
                            ]
                        }
                    }
                },
                "settings": {
                    "file": "setup",
                    "runTool": {
                        "type": "dosbox",
                        "data": {
                            "commands": [
                                "CONFIG -set \"\""
                            ],
                            "args": [
                                "-machine",
                                "vesa_nolfb"
                            ]
                        }
                    }
                },
                "singleplayer": {
                    "file": "main",
                    "runTool": {
                        "type": "dosbox",
                        "data": {
                            "commands": [
                                "CONFIG -set \\"
                            ],
                            "args": [
                                "-machine",
                                "vesa_nolfb"
                            ]
                        }
                    }
                }
            },
            "parameters": {},
            "resources": {},
        },
        "remix": {
            "name": "Remix v2.0 (DOS)",
            "files": {
                "setup": {
                    "path": "SETUP.EXE"
                },
                "main": {
                    "path": "RADIX.EXE"
                }
            },
            "runnables": {
                "multiplayer": {
                    "file": "main",
                    "runTool": {
                        "type": "dosbox",
                        "data": {
                            "commands": [
                                "CONFIG -set \"\""
                            ],
                    "net": [
                        "ipx",
                        "serial:9600",
                        "serial:14400",
                        "serial:19200",
                        "serial:38400",
                        "serial:57600"
                    ],
                            "args": [
                                "-machine",
                                "vesa_nolfb"
                            ]
                        }
                    }
                },
                "settings": {
                    "file": "setup",
                    "runTool": {
                        "type": "dosbox",
                        "data": {
                            "commands": [
                                "CONFIG -set \"\""
                            ],
                            "args": [
                                "-machine",
                                "vesa_nolfb"
                            ]
                        }
                    }
                },
                "singleplayer": {
                    "file": "main",
                    "runTool": {
                        "type": "dosbox",
                        "data": {
                            "commands": [
                                "CONFIG -set \"\""
                            ],
                            "args": [
                                "-machine",
                                "vesa_nolfb"
                            ]
                        }
                    }
                }
            },
            "parameters": {},
            "resources": {}
        },
    }
}