module.exports = {
    "resourceFolders": [
        "maps",
        "mods"
    ],
    "name": "Mass Destruction",
    "executables": {
        "full": {
            "name": "Full (DOS)",
            "files": {
                "setup": {
                    "path": "SETSOUND.EXE"
                },
                "main": {
                    "path": "MASSD.EXE"
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
                        "ipx"
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
    }
}