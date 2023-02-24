module.exports = {
    "resourceFolders": [],
    "name": "Last Rites",
    "executables": {
        "full": {
            "mountImg": true,
            "name": "Full (DOS)",
            "files": {
                "setup": {
                    "path": "SETUP.EXE"
                },
                "main": {
                    "path": "LR.EXE"
                }
            },
            "runnables": {
                "multiplayer": {
                    "file": "main",
                    "runTool": {
                        "type": "dosbox",
                        "data": {
                            "commands": [
                                "CONFIG -set \"cycles=fixed 100000\""
                            ],
                    "net": [
                        "ipx",
                        "serial:14400",
                        "serial:19200",
                        "serial:28800",
                        "serial:38400"
                    ],                            "args": [
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
                                "CONFIG -set \"cycles=fixed 100000\""
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
                                "CONFIG -set \"cycles=fixed 100000\""
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