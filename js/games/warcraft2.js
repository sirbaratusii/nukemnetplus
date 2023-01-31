module.exports = {
    "resourceFolders": [
        "maps",
        "mods"
    ],
    "name": "Warcraft II",
    "executables": {
        "demo": {
            "name": "Shareware 1.20elc (DOS)",
            "files": {
                "setup": {
                    "path": "SETUP.EXE"
                },
                "main": {
                    "path": "WAR2.EXE"
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
        "full_tod": {
            "mountImg": true,
            "name": "Tides of Darkness v1.3 (DOS)",
            "files": {
                "setup": {
                    "path": "SETUP.EXE"
                },
                "main": {
                    "path": "WAR2.EXE"
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
        "full_portal": {
            "mountImg": true,
            "name": "Beyond the Dark Portal v1.3 (DOS)",
            "files": {
                "setup": {
                    "path": "SETUP.EXE"
                },
                "main": {
                    "path": "WAR2.EXE"
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