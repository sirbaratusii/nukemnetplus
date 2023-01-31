module.exports = {
    "resourceFolders": [
        "maps",
        "mods"
    ],
    "name": "Z.A.R.",
    "executables": {
        "demo": {
            "name": "Demo v1.02 (DOS)",
            "files": {
                "setup": {
                    "path": "SETSOUND.BAT"
                },
                "main": {
                    "path": "ZAR.EXE"
                }
            },
            "runnables": {
                "multiplayer": {
                    "file": "main",
                    "runTool": {
                        "type": "dosbox",
                        "data": {
                            "commands": [
                                ""
                            ],
                    "net": [
                        "ipx",
                        "serial:9600",
                        "serial:14400",
                        "serial:19200",
                        "serial:38400",
                        "serial:57600",
						"serial:115200"
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
                                "CONFIG -set \"cycles=auto 5000 100% limit 50000\""
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
                                "CONFIG -set \"cycles=auto 5000 100% limit 50000\""
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
        "full": {
            "mountImg": true,
            "name": "Full (DOS)",
            "files": {
                "setup": {
                    "path": "SETSOUND.BAT"
                },
                "main": {
                    "path": "ZAR.EXE"
                }
            },
            "runnables": {
                "multiplayer": {
                    "file": "main",
                    "runTool": {
                        "type": "dosbox",
                        "data": {
                            "commands": [
                                ""
                            ],
                    "net": [
                        "ipx",
                        "serial:9600",
                        "serial:14400",
                        "serial:19200",
                        "serial:38400",
                        "serial:57600",
						"serial:115200"
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
                                ""
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
                                ""
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