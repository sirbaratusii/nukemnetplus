{
    "resourceFolders": [
        "maps",
        "mods"
    ],
    "name": "Descent",
    "executables": {
        "shareware1_4": {
            "name": "Shareware 1.4 (DOS)",
            "files": {
                "setup": {
                    "path": "SETUP.EXE"
                },
                "main": {
                    "path": "DCNTSHR.EXE"
                }
            },
            "runnables": {
                "multiplayer": {
                    "file": "main",
                    "runTool": {
                        "type": "dosbox",
                        "data": {
                            "commands": [
                                "CONFIG -set \"cycles=auto 5000 100% limit 50000\""
                            ],
                            "net": "ipx",
                            "args": [
                                "-macine",
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
                                "-macine",
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
                                "-macine",
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
            "name": "Full 1.4a (DOS)",
            "files": {
                "setup": {
                    "path": "SETUP.EXE"
                },
                "main": {
                    "path": "DESCENTR.EXE"
                }
            },
            "runnables": {
                "multiplayer": {
                    "file": "main",
                    "runTool": {
                        "type": "dosbox",
                        "data": {
                            "commands": [
                                "CONFIG -set \"cycles=auto 5000 100% limit 50000\""
                            ],
                            "net": "ipx",
                            "args": [
                                "-macine",
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
                                "-macine",
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
                                "-macine",
                                "vesa_nolfb"
                            ]
                        }
                    }
                }
            },
            "parameters": {},
            "resources": {}
        },
        "dxxrebirth": {
            "midGameJoin": true,
            "name": "DXX-Rebirth",
            "files": {
                "main": {
                    "path": "d1x-rebirth.exe"
                }
            },
            "runnables": {
                "multiplayer": {
                    "file": "main"
                },
                "settings": {
                    "file": "main"
                },
                "singleplayer": {
                    "file": "main"
                }
            },
            "parameters": {
                "host_conn": {
                    "modeSupport": [
                        "multiplayer"
                    ],
                    "type": "static",
                    "value": [
                        "'-udp_myport'",
                        "GameRoom.MyPort"
                    ],
                    "for": "host-only-private"
                },
                "client_conn": {
                    "modeSupport": [
                        "multiplayer"
                    ],
                    "type": "static",
                    "value": [
                        "'-udp_myport'",
                        "GameRoom.MyPort",
                        "'-udp_hostaddr'",
                        "GameRoom.DestIp",
                        "'-udp_hostport'",
                        "GameRoom.DestPort"
                    ],
                    "for": "client-only-private"
                }
            },
            "resources": {}
        }
    }
}