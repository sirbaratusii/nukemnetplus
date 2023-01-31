module.exports = {
    "resourceFolders": [
        "maps",
        "mods"
    ],
    "name": "Eradicator",
    "executables": {
        "demo1_1": {
            "name": "Demo v1.1 (DOS)",
            "files": {
                "setup": {
                    "path": "SETSOUND.EXE"
                },
                "main": {
                    "path": "ERAD.EXE"
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
        "full": {
            "name": "Full Version v1.0 (DOS)",
            "files": {
                "setup": {
                    "path": "SETSOUND.EXE"
                },
                "main": {
                    "path": "ERAD.EXE"
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