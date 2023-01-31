module.exports = {
    "name": "Warcraft: Orcs & Humans",
    "executables": {
        "shareware1_12": {
            "name": "Shareware v1.22 (DOS)",
		    "maxPlayers": 2,
            "files": {
                "setup": {
                    "path": "SETUP.EXE"
                },
                "main": {
                    "path": "WAR.EXE"
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
                    ],
                            "args": [
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
                            ]
                        }
                    }
                }
            },
            "parameters": {},
            "resources": {},
        },
        "full122h": {
            "name": "Full Version v1.22h (DOS)",
			"maxPlayers": 2,
            "files": {
                "setup": {
                    "path": "SETUP.EXE"
                },
                "main": {
                    "path": "WAR.EXE"
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
        },
    }
}