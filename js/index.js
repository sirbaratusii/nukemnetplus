// This is an example js file for a NukemNet extension.
// You can use this file as a template for your own extensions.
// ** WARNING: Be very careful when editing this file, as it may break the standard client behaviour.
// ** DO NOT USE extensions that contain js files that you don't trust.

// ** IMPORTANT (please use your own IRC server during extension development) **
// --------------
// When developing extensions, you might need to restart NukemNet, a lot.
// to prevent spamming the production irc server with join/quit events, you should run your own local irc server.
// Don't worry it's easy, just download Ergo IRC server, and using the terminal type "ergo run".
// To configure NukemNet to connect to your own local irc server, (and prevent it from going online - optional), add these lines in user/server.json
// {
//     "offline":true, // optional, turns off external ip lookup, bypassing the blocking "Checking Connectivity" popup.
//     "irc": {
//         "address":"localhost",
//         "port":6667,
//         "secure":false
//     }
// }
// If you need to run multiple instances of NukemNet concurrently,
// add an empty file named "allowMultipleInstances" in the user folder.

// this top level function does not support async
module.exports = function({libs, paths, settings, ircClient, mainStore, storeActions, DialogMgr, nncmdSentEmitter, nncmdReceivedEmitter, sendNNCmdTo}) {
    // You shouldn't need to run any NukemNet related code here, better use the "init" callback.
    
    // can listen to ircClient events using ircClient.on('putEventNameHere', callback)
    // remember to remove listeners when destroying the extension using the "destroy" function.
    // Valid event names are:
    // registered
    // notice
    // join
    // error
    // raw
    // kill
    // quit
    // part
    // kick
    // message (better use onPureIrcMessage callback)
    // selfMessage (better use onPureIrcMessage callback)
    // motd // message of the day
    // +mode
    // -mode
    // nick
    // names
    // topic
    // invite

    // mainStore is the root state store for the client, and has various related useful functions.
    // storeActions has more functions related to mainStore.
    // ** Be very careful not to break anything while using these **

    // can listen to NukemNet Command Events with nncmdSentEmitter and nncmdReceivedEmitter;
    // individual events: nncmdEmitter.on('putEventNameHere', callback).
    // all events: nncmdEmitter.on('*', callback).
    // BE CAREFUL NOT TO REMOVE THE DEFAULT LISTENERS FOR THESE EVENTS.
    
    // sendNNCmd is a function that sends a NukemNet commands to the channel or user nick.
    // await sendNNCmdTo('#somechan' or 'someUser', {
    //     op:'some_command_here', // op will be prefixed with "E.yourExtensionName." to prevent conflicts with built-in NN commands.
    //     data: {} // Put your data JSON object here
    // });

    // DialogMgr can show either popups, or floating windows which you can drag around (all are stackable)
    // *** Popup ***
    // example: const popupRefPromise = DialogMgr.addPopup({title:"My Popup", body:$(`<div>Hello Popup!</div><button>clickme</button>`), buttons:[{body:"Special", onClick:()=>{/*Do Something*/}}]});
    // can await popupRefPromise, or use it to close the popup later: popupRefPromise.close()
    // typescript definition:
    // type PopupProps = {
    //     noCenter?:boolean,
    //     size?:"sm" | "lg" | "xl",
    //     fullscreen?:boolean
    //     onClose?:(btnIndex?:number)=>void,
    //     title?:PlainText_HTMLElement_JQueryElement_JSX,
    //     closeButton?:boolean
    //     body?: PlainText_HTMLElement_JQueryElement_JSX,
    //     persistent?:boolean,
    //     buttons?: {
    //         body:PlainText_HTMLElement_JQueryElement_JSX,
    //         variant?:'primary'|'secondary'|'success'|'danger'|'warning'|'info'|'light'|'dark'|'muted'|'white',
    //         onClick?:()=>void,
    //         noClose?:boolean
    //     }[];
    // }
    // *** Window ***
    // example: 
    // const windowRefPromise = DialogMgr.addWindow({close:()=>{}, title:"Uploading...", body: $(`<div>hello</div>`), buttons:[{text:"Abort",click:()=>{}}]});
    // can await windowRefPromise, or use it to close the window later: windowRefPromise.close()
    // typescript definition a combination of JQueryUI DialogOptions, with "body" property added.:
    // interface DialogOptions extends DialogEvents {
    //     autoOpen?: boolean | undefined;
    //     buttons?: { [buttonText: string]: (event?: Event) => void } | DialogButtonOptions[] | undefined;
    //     closeOnEscape?: boolean | undefined;
    //     classes?: DialogClasses | undefined;
    //     closeText?: string | undefined;
    //     appendTo?: string | undefined;
    //     dialogClass?: string | undefined;
    //     disabled?: boolean | undefined;
    //     draggable?: boolean | undefined;
    //     height?: number | string | undefined;
    //     hide?: boolean | number | string | DialogShowHideOptions | undefined;
    //     maxHeight?: number | undefined;
    //     maxWidth?: number | undefined;
    //     minHeight?: number | undefined;
    //     minWidth?: number | undefined;
    //     modal?: boolean | undefined;
    //     position?: any; // object, string or []
    //     resizable?: boolean | undefined;
    //     show?: boolean | number | string | DialogShowHideOptions | undefined;
    //     stack?: boolean | undefined;
    //     title?: string | undefined;
    //     width?: any; // number or string
    //     zIndex?: number | undefined;
    //     open?: DialogEvent | undefined;
    //     close?: DialogEvent | undefined;
    // }

    // Return value must adhere to this object structure:
    return {
        nnversion: '0.2.4', // mandatory
        init() {
            // mandatory
            // Supports async
            // all your init logic here
        },
        destroy() {
            // mandatory
            // Supports async
            // Clean up logic here
        },
        gameDefs(gameDefsObj) {
			gameDefsObj.games.duke3d.executables.full1_3d = require('./games/duke3d_13dfull');
			gameDefsObj.games.blood.executables.full.parameters.level = require('./games/blood_level');
            gameDefsObj.games.eradicator = require('./games/eradicator');
            gameDefsObj.games.radix = require('./games/radix');
            gameDefsObj.games.warcraft = require('./games/warcraft');
            gameDefsObj.games.warcraft2 = require('./games/warcraft2');
            gameDefsObj.games.zar = require('./games/zar');
			gameDefsObj.games.z.executables.dos.maxPlayers = 4
			gameDefsObj.games.descent2.name = ('Descent II')
        },
        ircConnection(connected) {
            // optional
            // supports async
            // "connected" false means disconnected.
			motd (ass)
        },
        onPureIrcMessage(nick, to, text, raw) {
            // optional
            // supports async
            // events arriving from ircClient.on('message', callback) and ircClient.on('selfMessage', callback)
            // except this should be more useful as it ignores all the NukemNet multi-part meta commands recieved/sent
            // to avoid confusion between standard user messages and NukemNet commands.
            // * On selfMessage nick&raw will be null, so you can use that to differentiate **
        },
        refreshedIpDetails(ipDetails) {
            // optional
            // supports async
        },
        willPlaySoundFile(fullPath, soundType) {
            // optional
            // supports async
            // return null to prevent playing the sound.
            // return a differnt sound file path to replace the original sound.
        },
        topbarCmd(topbarCmdsObj) {
            // optional
            // supports async
        },
        processWillStart(spawnArgs, execDef, launchInfo, imHost, players, hostIpDetails, useDedicated, otherIpDetails, channel) {
            // optional
            // Supports async
            // this function is called before launch, giving you a chance to modify the spawnArgs.
            // spawnArgs are the arguments sent to NodeJS's child_process.spawn method.
        },
        processStarted(processRef, execDef, launchInfo, imHost, players, hostIpDetails, useDedicated, otherIpDetails, channel) {
            // optional
            // Does not support async
        },
        updateSettings(newSettings) {
            // optional
            // Does not support async
            // Method called each time the settings are updated.
            // You can override the settings object here, but be careufl not to break anything!
        },
        gameRoomDetailsSet(gameRoomDetails) {
            // optional
            // supports async
            // Method called once a game room was created, and each time the game room details are updated (such as paramenters, game and executable, etc..);
            // You should be able to override gameRoomDetails.args here,  be careufl not to break anything!
        }
    }
}