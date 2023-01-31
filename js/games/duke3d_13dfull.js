module.exports = {
    "name": "Registered 1.3D (DOS)",
    "files": {
        "setup": {
            "path": "SETUP.EXE"
        },
        "duke": {
            "path": "DUKE3D.EXE"
        },
        "commit": {
            "path": "COMMIT.EXE"
        },
        "commit_dat": {
            "path": "COMMIT.DAT",
            "optional": true
        },
        "mapeditor": {
            "path": "BUILD.EXE",
            "optional": true
        },
        "duke3dgrp": {
            "path": "DUKE3D.GRP"
        }
    },
    "runnables": {
        "multiplayer": {
            "file": "commit",
            "runTool": {
                "type": "dosbox",
                "data": {
                    "commands": [
                        "CONFIG -set \"cycles=max\"",
                        "CONFIG -set \"core=auto\""
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
            },
            "beforeRun": [
                {
                    "cmd": "edit-ini",
                    "file": "commit_dat",
                    "edits": [
                        {
                            "category": "Commit",
                            "entry": "SOCKETNUMBER",
                            "value": "34889"
                        },
                        {
                            "category": "Commit",
                            "entry": "LAUNCHNAME",
                            "value": "'DUKE3D.EXE'"
                        },
                        {
                            "category": "Commit",
                            "entry": "NUMPLAYERS",
                            "value": "GameRoom.NumberOfPlayers"
                        },
                        {
                            "category": "Commit",
                            "entry": "COMMTYPE",
                            "value": "GameRoom?.Params?._nn_db_net?.[0]==='serial'?1:3"
                        },
                        {
                            "category": "Commit",
                            "entry": "COMPORT",
                            "value": "1"
                        },
                        {
                            "category": "Commit",
                            "entry": "IRQNUMBER",
                            "unquote": true,
                            "value": "'~'"
                        },
                        {
                            "category": "Commit",
                            "entry": "UARTADDRESS",
                            "unquote": true,
                            "value": "'~'"
                        },
                        {
                            "category": "Commit",
                            "entry": "PORTSPEED",
                            "unquote": true,
                            "skipNull": true,
                            "value": "GameRoom?.Params?._nn_db_net?.[1]"
                        }
                    ]
                }
            ]
        },
        "settings": {
            "file": "setup",
            "runTool": {
                "type": "dosbox",
                "data": {
                    "commands": [
                        "CONFIG -set \"cycles=max\"",
                        "CONFIG -set \"core=auto\""
                    ],
                    "args": [
                        "-machine",
                        "vesa_nolfb"
                    ]
                }
            }
        },
        "singleplayer": {
            "file": "duke",
            "runTool": {
                "type": "dosbox",
                "data": {
                    "commands": [
                        "CONFIG -set \"cycles=max\"",
                        "CONFIG -set \"core=auto\""
                    ],
                    "args": [
                        "-machine",
                        "vesa_nolfb"
                    ]
                }
            }
        },
        "mapeditor": {
            "file": "mapeditor",
            "runTool": {
                "type": "dosbox",
                "data": {
                    "commands": [
                        "CONFIG -set \"cycles=max\"",
                        "CONFIG -set \"core=auto\""
                    ],
                    "args": [
                        "-machine",
                        "vesa_nolfb"
                    ]
                }
            }
        }
    },
    "parameters": {
        "pname": {
            "modeSupport": [
                "multiplayer",
                "singleplayer",
                "settings"
            ],
            "type": "static",
            "value": [
                "'-name'",
                "Settings?Settings.InGamePlayerName:'NNPlayer'"
            ],
            "for": "private"
        },
        "recordDmo": {
            "modeSupport": [
                "multiplayer",
                "singleplayer",
                "settings"
            ],
            "type": "boolean",
            "label": "Record DMO",
            "value": "'/r'",
            "for": "private"
        },
        "monstersSkill": {
            "modeSupport": [
                "multiplayer",
                "singleplayer",
                "settings"
            ],
            "type": "numrange",
            "min": 1,
            "max": 4,
            "delta": 1,
            "label": "Monsters Skill",
            "value": "'/s' + value",
            "optional": true
        },
        "noMonsters": {
            "modeSupport": [
                "multiplayer",
                "singleplayer",
                "settings"
            ],
            "type": "boolean",
            "label": "No Monsters",
            "value": "'/m'"
        },
        "respawn": {
            "modeSupport": [
                "multiplayer",
                "singleplayer",
                "settings"
            ],
            "type": "choice",
            "label": "Respawn",
            "value": "'/t' + value",
            "optional": true,
            "choices": [
                {
                    "label": "Monsters",
                    "value": "1"
                },
                {
                    "label": "Items",
                    "value": "2"
                },
                {
                    "label": "Inventory",
                    "value": "3"
                },
                {
                    "label": "All",
                    "value": "x"
                }
            ]
        },
        "botsNum": {
            "modeSupport": [
                "multiplayer",
                "singleplayer",
                "settings"
            ],
            "type": "numrange",
            "min": 2,
            "max": 8,
            "delta": 1,
            "label": "Bots",
            "value": "'/q' + value",
            "optional": true
        },
        "masterslave": {
            "modeSupport": [
                "multiplayer"
            ],
            "type": "static",
            "value": [
                "'/i0'"
            ],
            "for": "private"
        },
/*        "botsAi": {
            "modeSupport": [
                "multiplayer",
                "singleplayer",
                "settings"
            ],
            "type": "boolean",
            "label": "Bots AI",
            "value": "'/a'"
        },
*/
        "playDmo": {
            "modeSupport": [
                "singleplayer"
            ],
            "type": "file",
            "format": "*.dmo",
            "label": "Play DMO",
            "value": "'/d' + value",
            "dosboxMount": true,
            "optional": true
        },
        "episodeAndLevel": {
            "modeSupport": [
                "multiplayer",
                "singleplayer",
                "settings"
            ],
            "type": "choice",
            "label": "Map",
            "optional": true,
            "value": [
                "'/v' + value[0]",
                "'/l' + value[1]"
            ],
            "choices": [
                {
                    "label": "Episode 1: L.A Meltdown",
                    "value": [
                        "1",
                        "1"
                    ]
                },
                {
                    "label": "E1L1 Hollywood Holocaust",
                    "value": [
                        "1",
                        "1"
                    ]
                },
                {
                    "label": "E1L2 Red Light District",
                    "value": [
                        "1",
                        "2"
                    ]
                },
                {
                    "label": "E1L3 Death Row",
                    "value": [
                        "1",
                        "3"
                    ]
                },
                {
                    "label": "E1L4 Toxic Dump",
                    "value": [
                        "1",
                        "4"
                    ]
                },
                {
                    "label": "E1L5 The Abyss",
                    "value": [
                        "1",
                        "5"
                    ]
                },
                {
                    "label": "E1L6 Launch Facility",
                    "value": [
                        "1",
                        "6"
                    ]
                },
                {
                    "label": "E1L7 Faces of Death",
                    "value": [
                        "1",
                        "7"
                    ]
                },
                {
                    "label": "E1L8 User Map",
                    "value": [
                        "1",
                        "8"
                    ]
                },
                {
                    "label": "Episode 2: Lunar Apocalypse",
                    "value": [
                        "2",
                        "1"
                    ]
                },
                {
                    "label": "E2L1 Spaceport",
                    "value": [
                        "2",
                        "1"
                    ]
                },
                {
                    "label": "E2L2 Incubator",
                    "value": [
                        "2",
                        "2"
                    ]
                },
                {
                    "label": "E2L3 Warp Factor",
                    "value": [
                        "2",
                        "3"
                    ]
                },
                {
                    "label": "E2L4 Fusion Station",
                    "value": [
                        "2",
                        "4"
                    ]
                },
                {
                    "label": "E2L5 Occupied Territory",
                    "value": [
                        "2",
                        "5"
                    ]
                },
                {
                    "label": "E2L6 Tiberius Station",
                    "value": [
                        "2",
                        "6"
                    ]
                },
                {
                    "label": "E2L7 Lunar Reactor",
                    "value": [
                        "2",
                        "7"
                    ]
                },
                {
                    "label": "E2L8 Dark Side",
                    "value": [
                        "2",
                        "8"
                    ]
                },
                {
                    "label": "E2L9 Overlord",
                    "value": [
                        "2",
                        "9"
                    ]
                },
                {
                    "label": "E2L10 Spin Cycle",
                    "value": [
                        "2",
                        "10"
                    ]
                },
                {
                    "label": "E2L11 Lunatic Fringe",
                    "value": [
                        "2",
                        "11"
                    ]
                },
                {
                    "label": "Episode 3: Shrapnel City",
                    "value": [
                        "3",
                        "1"
                    ]
                },
                {
                    "label": "E3L1 Raw Meat",
                    "value": [
                        "3",
                        "1"
                    ]
                },
                {
                    "label": "E3L2 Bank Roll",
                    "value": [
                        "3",
                        "2"
                    ]
                },
                {
                    "label": "E3L3 Flood Zone",
                    "value": [
                        "3",
                        "3"
                    ]
                },
                {
                    "label": "E3L4 L.A. Rumble",
                    "value": [
                        "3",
                        "4"
                    ]
                },
                {
                    "label": "E3L5 Movie Set",
                    "value": [
                        "3",
                        "5"
                    ]
                },
                {
                    "label": "E3L6 Rabid Transit",
                    "value": [
                        "3",
                        "6"
                    ]
                },
                {
                    "label": "E3L7 Fahrenheit",
                    "value": [
                        "3",
                        "7"
                    ]
                },
                {
                    "label": "E3L8 Hotel Hell",
                    "value": [
                        "3",
                        "8"
                    ]
                },
                {
                    "label": "E3L9 Stadium",
                    "value": [
                        "3",
                        "9"
                    ]
                },
                {
                    "label": "E3L10 Tier Drops",
                    "value": [
                        "3",
                        "10"
                    ]
                },
                {
                    "label": "E3L11 Freeway",
                    "value": [
                        "3",
                        "11"
                    ]
                },
            ]
        },
        "multiplayerMode": {
            "modeSupport": [
                "multiplayer",
                "singleplayer",
                "settings"
            ],
            "type": "choice",
            "label": "Multiplayer Mode",
            "value": "'/c' + value",
            "optional": true,
            "choices": [
                {
                    "label": "Dukematch (Spawn)",
                    "value": "1"
                },
                {
                    "label": "Coop",
                    "value": "2"
                },
                {
                    "label": "Dukematch (No Spawn)",
                    "value": "3"
                }
            ]
        },
        "_nn_db_net": {
            "syncOnly": true,
            "modeSupport": [
                "multiplayer"
            ],
            "type": "choice",
            "label": "Net",
            "description": "IPX/Serial(COM1)",
            "value": [
                "value[0]",
                "value[1]"
            ],
            "choices": [
                {
                    "label": "ipx",
                    "value": [
                        "ipx"
                    ]
                },
                {
                    "label": "serial:9600",
                    "value": [
                        "serial",
                        "9600"
                    ]
                },
                {
                    "label": "serial:14400",
                    "value": [
                        "serial",
                        "14400"
                    ]
                },
                {
                    "label": "serial:19200",
                    "value": [
                        "serial",
                        "19200"
                    ]
                },
                {
                    "label": "serial:38400",
                    "value": [
                        "serial",
                        "38400"
                    ]
                },
                {
                    "label": "serial:57600",
                    "value": [
                        "serial",
                        "57600"
                    ]
                }
            ]
        }
    }
}