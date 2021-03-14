let body = document.querySelector("body");

let i = 0;

let wallpapers = [
    "inferno_ct.png",
    "anubis.png",
    "overpass.png",
    "italy.png",
    "canals.png"
];

function setWallpaper()
{
    body.style.backgroundImage = 'url("img/' + wallpapers[i] + '")';
    i++;
    i %= 5;
}

setInterval(setWallpaper, 2500);

let btn_ds_copy = document.querySelector(".discord");

btn_ds_copy.addEventListener("click", function(){
    let text = "gunship#5599";

    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text);
        return;
    }
    navigator.clipboard.writeText(text);
    alert("Discord tag was copied");
})

let type_img = document.querySelector(".type_img");

let chose = document.querySelector(".type");

let functions_type = [document.querySelector(".rage_func"), document.querySelector(".aa_func"), document.querySelector(".visual_func"), document.querySelector(".misc_func")];

let functions = document.querySelector(".functions");

function type()
{
    if (chose.value == "rage")
    {
        type_img.src = "img/rage.png";
        
        let rage = functions_type[0];

        let aa = functions_type[1];

        let visual = functions_type[2];

        let misc = functions_type[3];

        rage.style.display = "block";

        aa.style.display = "none";

        visual.style.display = "none";

        misc.style.display = "none";
    }
    if (chose.value == "aa")
    {
        type_img.src = "img/aa.png";
        
        let rage = functions_type[0];

        let aa = functions_type[1];

        let visual = functions_type[2];

        let misc = functions_type[3];

        rage.style.display = "none";

        aa.style.display = "block";

        visual.style.display = "none";

        misc.style.display = "none";
    }
    if (chose.value == "visual")
    {
        type_img.src = "img/visual.png";
        
        let rage = functions_type[0];

        let aa = functions_type[1];

        let visual = functions_type[2];

        let misc = functions_type[3];

        rage.style.display = "none";

        aa.style.display = "none";

        visual.style.display = "block";

        misc.style.display = "none";
    }
    if (chose.value == "misc")
    {
        type_img.src = "img/misc.png";
        
        let rage = functions_type[0];

        let aa = functions_type[1];

        let visual = functions_type[2];

        let misc = functions_type[3];

        rage.style.display = "none";

        aa.style.display = "none";

        visual.style.display = "none";

        misc.style.display = "block";
    }
}

setInterval(type, 1);

let select = [
    [
        {enable: false, title: "Min Damage", weapons: ["GENERAL", "PISTOL", "HEAVY PISTOL", "SCOUT", "AWP", "AUTOSNIPER"]},
        {enable: false, title: "Recharge Boost"},
        {enable: false, title: "Disable Fake Lags per Revolver"}
    ],
    [
        {enable: false, title: "Low Delta"},
        {enable: false, title: "FD MM"}
    ],
    [
        {enable: false, title: "Trail"}
    ],
    [
        {enable: false, title: "FPS Boost"}
    ]
];

function rageFunc()
{
    let mindmg_box = document.querySelector("#mindmg");
    let select_mindmg = document.querySelector(".mindmg_select");
    let recharge_box = document.querySelector("#recharge");
    let r8_box = document.querySelector("#fakelags_r8");

    if (mindmg_box.checked)
    {
        select_mindmg.style.display = "inline";
        select[0][0].enable = true;

        let general = document.querySelector("#GENERAL");
        let pistol = document.querySelector("#PISTOL");
        let heavy_pistol = document.querySelector("#HEAVYPISTOL");
        let scout = document.querySelector("#SCOUT");
        let awp = document.querySelector("#AWP");
        let auto = document.querySelector("#AUTOSNIPER");

        if (!general.checked && !pistol.checked && !heavy_pistol.checked && !scout.checked && !awp.checked && !auto.checked)
        {
            select[0][0].weapons = ["GENERAL", "PISTOL", "HEAVY PISTOL", "SCOUT", "AWP", "AUTOSNIPER"];
        }
        else
        {
            let prepare = [];
            if (general.checked) prepare.push("GENERAL");
            if (pistol.checked) prepare.push("PISTOL");
            if (heavy_pistol.checked) prepare.push("HEAVY PISTOL");
            if (scout.checked) prepare.push("SCOUT");
            if (awp.checked) prepare.push("AWP");
            if (auto.checked) prepare.push("AUTOSNIPER");

            select[0][0].weapons = prepare;
        }
    }
    else
    {
        select_mindmg.style.display = "none";
        select[0][0].enable = false;
    }

    if (recharge_box.checked)
    {
        select[0][1].enable = true;
    }
    else
    {
        select[0][1].enable = false;
    }

    if (r8_box.checked)
    {
        select[0][2].enable = true;
    }
    else
    {
        select[0][2].enable = false;
    }
}

setInterval(rageFunc, 100);

//AA
function aaFunc()
{
    let lowdelta = document.querySelector("#lowdelta");
    let fd = document.querySelector("#fakeduck_mm");

    if (lowdelta.checked)
    {
        select[1][0].enable = true;
    }
    else
    {
        select[1][0].enable = false;
    }

    if (fd.checked)
    {
        select[1][1].enable = true;
    }
    else
    {
        select[1][1].enable = false;
    }
}

setInterval(aaFunc, 100);

//VISUAL
function visualFunc()
{
    let trail = document.querySelector("#trail");

    if (trail.checked)
    {
        select[2][0].enable = true;
    }
    else
    {
        select[2][0].enable = false;
    }
}

setInterval(visualFunc, 100);

//MISC
function miscFunc()
{
    let fps_boost = document.querySelector("#fps_boost");

    if (fps_boost.checked)
    {
        select[3][0].enable = true;
    }
    else
    {
        select[3][0].enable = false;
    }
}

setInterval(miscFunc, 100);

//Result
function resultFunc()
{
    let ps = [document.querySelector(".rage_res"), document.querySelector(".aa_res"), document.querySelector(".visual_res"), document.querySelector(".misc_res")];
    let titles = ["Rage:", "AA:", "Visual:", "Misc:"];
    for (let i = 0; i < 4; i++)
    {
        let item = select[i];
        ps[i].innerHTML = titles[i];

        for (let j = 0; j < item.length; j++)
        {
            if (item[j].enable)
            {
                ps[i].innerHTML += ' "' + item[j].title + '"';
                if (item[j].weapons)
                {
                    ps[i].innerHTML += ' ('
                    for (let k = 0; k < item[j].weapons.length; k++)
                    {
                        ps[i].innerHTML += item[j].weapons[k] + ' ';
                    }
                    ps[i].innerHTML += ')'
                }
            }
        }
    }
}

setInterval(resultFunc, 100);

//Render Code
let btn_render = document.querySelector(".render_result");

btn_render.addEventListener("click", function(){
    let render_block = document.querySelectorAll(".answer");
    let vars = '';
    let ui = '';
    let functions = '';
    let callbacks = '';
    let titles = ["Rage", "AA", "Visual", "Misc"];
    let total_func = 0;
    for (let i = 0; i < 4; i++)
    {
        let item = select[i];
        ui += 'UI.AddLabel("' + titles[i] + '"); ';

        for (let j = 0; j < item.length; j++)
        {
            if (item[j].enable)
            {
                if (item[j].title == "Min Damage")
                {
                    total_func++;

                    let cache = [];

                    ui += ' UI.AddCheckbox("Min Damage"); UI.AddHotkey("Damage Key");';

                    for (let k = 0; k < item[j].weapons.length; k++)
                    {
                        cache.push(item[j].weapons[k]);
                        ui += ' UI.AddSliderInt("' + item[j].weapons[k] + '", 0, 130);';
                    }

                    vars += ' var dmg_caches = [';
                    for (let k = 0; k < cache.length; k++)
                    {
                        vars += 'UI.GetValue("Rage", "' + cache[k] + '", "Targeting", "Minimum damage"), ';
                    }
                    vars += ']; ';

                    functions += 'function dmg_visibality(){var enable_dmg = UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "Min Damage"); UI.SetEnabled("Misc", "JAVASCRIPT", "Script Items", "Damage Key", enable_dmg); ';
                    for (let k = 0; k < cache.length; k++)
                    {
                        functions += 'UI.SetEnabled("Misc", "JAVASCRIPT", "Script Items", "' + cache[k] + '", enable_dmg); ';
                    }
                    functions += '} ';

                    functions += 'function min_dmg(){dmg_visibality(); if (UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Damage Key") && UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "Min Damage")){var dmg = [';
                    for (let k = 0; k < cache.length; k++)
                    {
                        functions += 'UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "' + cache[k] + '"), ';
                    }
                    functions += ']; ';

                    for (let k = 0; k < cache.length; k++)
                    {
                        functions += 'UI.SetValue("Rage", "' + cache[k] + '", "Targeting", "Minimum damage", dmg[' + k + ']); ';
                    }

                    functions += '}else{ ';
                    for (let k = 0; k < cache.length; k++)
                    {
                        functions += 'UI.SetValue("Rage", "' + cache[k] + '", "Targeting", "Minimum damage", dmg_caches[' + k + ']); ';
                    }

                    functions += '}}';

                    callbacks += 'Cheat.RegisterCallback("Draw", "min_dmg");'
                }

                if (item[j].title == "Recharge Boost")
                {
                    total_func++;

                    ui += ' UI.AddSliderInt("Double tap tolerance", 0, 3);';

                    functions += 'function can_shift_shot(ticks_to_shift) { var me = Entity.GetLocalPlayer(); var wpn = Entity.GetWeapon(me); if (me == null || wpn == null) return false; var tickbase = Entity.GetProp(me, "CCSPlayer", "m_nTickBase"); var curtime = Globals.TickInterval() * (tickbase-ticks_to_shift); if (curtime < Entity.GetProp(me, "CCSPlayer", "m_flNextAttack")) return false; if (curtime < Entity.GetProp(wpn, "CBaseCombatWeapon", "m_flNextPrimaryAttack")) return false; return true; }';
                    functions += 'function _TBC_CREATE_MOVE() { var is_charged = Exploit.GetCharge(); var reserve = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Double tap tolerance"); Exploit[(is_charged != 1 ? "Enable" : "Disable") + "Recharge"](); if (can_shift_shot(14) && is_charged != 1) { Exploit.DisableRecharge(); Exploit.Recharge(); } Exploit.OverrideTolerance(reserve); Exploit.OverrideShift(14-reserve); }';
                    functions += 'function _TBC_UNLOAD() { Exploit.EnableRecharge(); }';

                    callbacks += 'Cheat.RegisterCallback("CreateMove", "_TBC_CREATE_MOVE");';
                    callbacks += 'Cheat.RegisterCallback("Unload", "_TBC_UNLOAD");';
                }

                if (item[j].title == "Disable Fake Lags per Revolver")
                {
                    total_func++;

                    ui += ' UI.AddCheckbox("Disable Fake Lags per Revolver");';

                    functions += 'function check() { if (UI.GetValue( "Misc", "JAVASCRIPT", "Script items", "Disable Fake Lags per Revolver")) { LagFix(); } }';
                    functions += 'function LagFix() { player = Entity.GetLocalPlayer(); weapon = Entity.GetWeapon(player); weaponName = Entity.GetName(weapon);if (weaponName.includes("r8 revolver")) {UI.SetValue( "Anti-Aim", "Fake-Lag", "Enabled", false ); }else { UI.SetValue( "Anti-Aim", "Fake-Lag", "Enabled", true ); } }';

                    callbacks += 'Global.RegisterCallback("Draw", "check");';
                }

                if (item[j].title == "Low Delta")
                {
                    total_func++;

                    vars += ' var jitter_cache = UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset"); var yaw_cache = UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset");';

                    ui += ' UI.AddCheckbox("Low Delta"); UI.AddDropdown("Low Delta type:", ["Simple", "Custom", "Random"]); UI.AddSliderInt("Angle", -40, 40); UI.AddSliderInt("Min Angle", -40, 40); UI.AddSliderInt("Max Angle", -40, 40);';

                    functions += 'function lowdleta_visibility() { var enable_ld = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Low Delta"); if (enable_ld) { UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Low Delta type:", 1); var ld_type = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Low Delta type:"); switch (ld_type) { case 0: {UI.SetEnabled("Misc", "JAVASCRIPT", "Script Items", "Angle", 0); UI.SetEnabled("Misc", "JAVASCRIPT", "Script Items", "Min Angle", 0); UI.SetEnabled("Misc", "JAVASCRIPT", "Script Items", "Max Angle", 0); break;} case 1: {UI.SetEnabled("Misc", "JAVASCRIPT", "Script Items", "Angle", 1); UI.SetEnabled("Misc", "JAVASCRIPT", "Script Items", "Min Angle", 0); UI.SetEnabled("Misc", "JAVASCRIPT", "Script Items", "Max Angle", 0); break;} case 2: {UI.SetEnabled("Misc", "JAVASCRIPT", "Script Items", "Angle", 0); UI.SetEnabled("Misc", "JAVASCRIPT", "Script Items", "Min Angle", 1); UI.SetEnabled("Misc", "JAVASCRIPT", "Script Items", "Max Angle", 1); break;} } } else { UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Low Delta type:", 0); UI.SetEnabled("Misc", "JAVASCRIPT", "Script Items", "Angle", 0); UI.SetEnabled("Misc", "JAVASCRIPT", "Script Items", "Min Angle", 0); UI.SetEnabled("Misc", "JAVASCRIPT", "Script Items", "Max Angle", 0); } }';
                    functions += 'function Safe_Head() { localplayer_index = Entity.GetLocalPlayer( ); if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "LowDelta on slow walk") && UI.IsHotkeyActive("Anti-Aim", "Extra", "Slow walk")) { UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 10); UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", 0); UI.SetValue("Anti-Aim", "Rage Anti-Aim", "At targets", 0); var ld_type = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Low Delta type:"); switch (ld_type) { case 0: {AntiAim.SetOverride(1); AntiAim.SetFakeOffset(0); AntiAim.SetRealOffset(-30); break;} case 1: {AntiAim.SetOverride(1); var angle = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Angle"); AntiAim.SetFakeOffset(angle); AntiAim.SetRealOffset(0); break;} case 2: {AntiAim.SetOverride(1); AntiAim.SetFakeOffset(0); var min_angle = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Min Angle"); var max_angle = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Max Angle"); var angle = getRandomInt(min_angle, max_angle); AntiAim.SetRealOffset(angle); break;} } } else { UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", jitter_cache); AntiAim.SetOverride(0); } }';

                    callbacks += 'Cheat.RegisterCallback("CreateMove", "Safe_Head"); Cheat.RegisterCallback("Draw", "lowdleta_visibility");';
                }

                if (item[j].title == "FD MM")
                {
                    total_func++;

                    vars += ' var local = Entity.GetLocalPlayer(); var doubletap_bak = false; var hideshots_bak = false; var duck_bak = false; var duck = false;';

                    ui += ' UI.AddHotkey("VALVE Fake duck"); UI.AddLabel("UNBIND YOUR DEFAULT FAKE DUCK"); UI.AddSliderInt("Min Height", 47,60); UI.AddSliderInt("Max Height", 47,60); UI.AddSliderInt("Max Choke Count", 1,16); UI.AddCheckbox("No Fake-Lag On Max Height");';

                    functions += ' function fakelag(state){ UI.SetValue("Anti-Aim", "Fake-Lag", "Enabled", state); }';
                    functions += 'function fd(){ local = Entity.GetLocalPlayer(); height = Math.round(Entity.GetEyePosition(local)[2] - Entity.GetHitboxPosition(local, 12)[2]); if(UI.IsHotkeyActive("Script items", "VALVE Fake duck")){ duck_bak = true; if(UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Doubletap")){ doubletap_bak = UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Doubletap"); UI.ToggleHotkey("Rage", "GENERAL", "Exploits", "Doubletap"); } if(UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Hide shots")){ hideshots_bak = UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Hide shots"); UI.ToggleHotkey("Rage", "GENERAL", "Exploits", "Hide shots"); } UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", UI.GetValue("Script items", "Max Choke Count")); UI.SetValue("Anti-Aim", "Fake-Lag", "Jitter", 0); if(height <= UI.GetValue("Script items", "Min Height")){ Cheat.ExecuteCommand("-duck"); duck = false; fakelag(false); return; } if(height > UI.GetValue("Script items", "Min Height") && height < UI.GetValue("Script items", "Max Height")){ fakelag(true); } if(height >= UI.GetValue("Script items", "Max Height")){ if(UI.GetValue("Script items", "No Fake-Lag On Max Height")){ fakelag(false); } Cheat.ExecuteCommand("+duck"); duck = true; return; } } else{ fakelag(false); if(doubletap_bak == true){ UI.ToggleHotkey("Rage", "GENERAL", "Exploits", "Doubletap"); doubletap_bak = false; } if(hideshots_bak == true){ UI.ToggleHotkey("Rage", "GENERAL", "Exploits", "Hide shots"); hideshots_bak = false; } if(duck_bak == true){ Cheat.ExecuteCommand("-duck"); duck_bak = false; } } }';

                    callbacks += ' Cheat.RegisterCallback("Draw", "fd");';
                }

                if (item[j].title == "Trail")
                {
                    total_func++;

                    vars += ' var pos = []; var presets_settings = [];';

                    ui += ' UI.AddDropdown("Presets", ["Custom", "High FPS", "Beautiful"]); UI.AddSliderInt("Length", 0, 1000); UI.AddDropdown("Type", ["Rainbow", "Custom"]); UI.AddColorPicker("Custom color"); UI.AddHotkey("Clear trail");';

                    functions += ' function alp(c, a) { return [c[0], c[1], c[2], a]; } function hsv2rgb(h, s, v) { var r, g, b, i, f, p, q, t; if (arguments.length === 1) { s = h.s, v = h.v, h = h.h; } i = Math.floor(h * 6); f = h * 6 - i; p = v * (1 - s); q = v * (1 - f * s); t = v * (1 - (1 - f) * s); switch (i % 6) { case 0: {r = v, g = t, b = p; break;} case 1: {r = q, g = v, b = p; break;} case 2: {r = p, g = v, b = t; break;} case 3: {r = p, g = q, b = v; break;} case 4: {r = t, g = p, b = v; break;} case 5: {r = v, g = p, b = q; break;} }; return [ Math.round(r * 255), Math.round(g * 255), Math.round(b * 255), 255 ]; } function get_pos() { var local = Entity.GetLocalPlayer(); pos.unshift(Entity.GetRenderOrigin(local)); var length = 0; if (presets_settings[0] == 1) length = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Length"); else if (presets_settings[0] == 2) length = 100; else if (presets_settings[0] == 3) length = 500; if (pos.length > length) { pos.pop(); } } function trail_visibality() { var preset = UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "Presets"); if (preset == 0) { UI.SetEnabled("Misc", "JAVASCRIPT", "Script Items", "Length", true); UI.SetEnabled("Misc", "JAVASCRIPT", "Script Items", "Type", true); var enable_type = UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "Type"); UI.SetEnabled("Misc", "JAVASCRIPT", "Script Items", "Custom color", enable_type); presets_settings = [1, enable_type]; } else if (preset == 1) { UI.SetEnabled("Misc", "JAVASCRIPT", "Script Items", "Length", false); UI.SetEnabled("Misc", "JAVASCRIPT", "Script Items", "Type", false); UI.SetEnabled("Misc", "JAVASCRIPT", "Script Items", "Custom color", true); presets_settings = [2, true]; } else if (preset == 2) { UI.SetEnabled("Misc", "JAVASCRIPT", "Script Items", "Length", false); UI.SetEnabled("Misc", "JAVASCRIPT", "Script Items", "Type", false); UI.SetEnabled("Misc", "JAVASCRIPT", "Script Items", "Custom color", false); presets_settings = [3, false]; } } function trail() { trail_visibality(); if (UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script Items", "Clear trail")) { reset(); } var preset = UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "Presets"); if (preset == 0) { var local = Entity.GetLocalPlayer(); if (!Entity.IsAlive(local)) return; var first = true; var last = []; if (pos.length < 1)  return; for (i in pos) { var w2s = Render.WorldToScreen(pos[i]); if (!first) { var color = UI.GetColor("Misc", "JAVASCRIPT", "Script Items", "Custom color"); if (presets_settings[1] == 1) Render.Line(w2s[0], w2s[1], last[0], last[1], [color[0], color[1], color[2], 255]); else Render.Line(w2s[0], w2s[1], last[0], last[1], hsv2rgb((Globals.Realtime() + (i / 200)) % 1, 1, 1)); } first = false; last = w2s; } } else if (preset == 1) { var local = Entity.GetLocalPlayer(); if (!Entity.IsAlive(local)) return; var first = true; var last = []; if (pos.length < 1) return; for (i in pos) { var w2s = Render.WorldToScreen(pos[i]); if (!first) { var color = UI.GetColor("Misc", "JAVASCRIPT", "Script Items", "Custom color"); Render.Line(w2s[0], w2s[1], last[0], last[1], [color[0], color[1], color[2], 255]); } first = false; last = w2s; } } else if (preset == 2) { var local = Entity.GetLocalPlayer(); if (!Entity.IsAlive(local)) return; var first = true; var last = []; if (pos.length < 1) return; for (i in pos) { var w2s = Render.WorldToScreen(pos[i]); if (!first) { Render.Line(w2s[0], w2s[1], last[0], last[1], hsv2rgb((Globals.Realtime() + (i / 200)) % 1, 1, 1)); } first = false; last = w2s; } } } function reset() { pos = []; }';

                    callbacks += ' Cheat.RegisterCallback("round_start", "reset"); Cheat.RegisterCallback("Draw", "trail"); Cheat.RegisterCallback("CreateMove", "get_pos");';
                }

                if (item[j].title == "FPS Boost")
                {
                    total_func++;

                    ui += ' UI.AddCheckbox("FPS Boost");';

                    functions += ' function fps_boost(){ if (UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "FPS Boost")){ UI.SetValue("Misc", "GENERAL", "Misc", "Force sv_cheats", true); UI.SetValue("Misc", "GENERAL", "Misc", "Hidden cvars", true); Convar.SetString("r_shadows", "0"); Convar.SetString("cl_csm_static_prop_shadows", "0"); Convar.SetString("cl_csm_shadows", "0"); Convar.SetString("cl_csm_world_shadows", "0"); Convar.SetString("cl_foot_contact_shadows", "0"); Convar.SetString("cl_csm_viewmodel_shadows", "0"); Convar.SetString("cl_csm_rope_shadows", "0"); Convar.SetString("cl_csm_sprite_shadows", "0"); Convar.SetString("cl_csm_world_shadows_in_viewmodelcascade", "0"); Convar.SetString("cl_csm_translucent_shadows", "0"); Convar.SetString("cl_csm_entity_shadows", "0"); Convar.SetString("violence_hblood", "0"); Convar.SetString("r_3dsky", "0"); Convar.SetString("r_drawdecals", "0"); Convar.SetString("r_drawrain", "0"); Convar.SetString("r_drawropes", "0"); Convar.SetString("r_drawsprites", "0"); Convar.SetString("fog_enable_water_fog", "0"); Convar.SetString("@panorama_disable_blur", "1"); Convar.SetString("dsp_slow_cpu", "1"); Convar.SetString("cl_disable_ragdolls", "1"); Convar.SetString("mat_disable_bloom", "1"); } else{ Convar.SetString("r_shadows", "1"); Convar.SetString("cl_csm_static_prop_shadows", "1"); Convar.SetString("cl_csm_shadows", "1"); Convar.SetString("cl_csm_world_shadows", "1"); Convar.SetString("cl_foot_contact_shadows", "1"); Convar.SetString("cl_csm_viewmodel_shadows", "1"); Convar.SetString("cl_csm_rope_shadows", "1"); Convar.SetString("cl_csm_sprite_shadows", "1"); Convar.SetString("cl_csm_world_shadows_in_viewmodelcascade", "1"); Convar.SetString("cl_csm_translucent_shadows", "1"); Convar.SetString("cl_csm_entity_shadows", "1"); Convar.SetString("violence_hblood", "1"); Convar.SetString("r_3dsky", "1"); Convar.SetString("r_drawdecals", "1"); Convar.SetString("r_drawrain", "1"); Convar.SetString("r_drawropes", "1"); Convar.SetString("r_drawsprites", "1"); Convar.SetString("fog_enable_water_fog", "1"); Convar.SetString("@panorama_disable_blur", "0"); Convar.SetString("dsp_slow_cpu", "0"); Convar.SetString("cl_disable_ragdolls", "0"); Convar.SetString("mat_disable_bloom", "0"); } }';

                    callbacks += ' Cheat.RegisterCallback("Draw", "fps_boost");';
                }
            }
        }
    }

    let code = vars + ui + functions + callbacks;

    if (total_func == 0)
    {
        render_block[0].style.display = "none";
        render_block[1].style.display = "block";
        render_block[1].innerHTML = 'Full clear cord :)';
    }
    else
    {
        render_block[0].style.display = "block";
        render_block[1].style.display = "block";
        render_block[1].innerHTML = code;
    }
})