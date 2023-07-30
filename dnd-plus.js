class DnDPlusSetup
{
    static async AddWeaponProperties() 
    {
        CONFIG.DND5E.weaponProperties['armorpiercing'] = 'Armor Piercing';
        CONFIG.DND5E.weaponProperties['brutal'] = 'Brutal';
        CONFIG.DND5E.weaponProperties['cleave'] = 'Cleave';
        CONFIG.DND5E.weaponProperties['concealable'] = 'Concealable';
        CONFIG.DND5E.weaponProperties['damage'] = 'Damage';
        CONFIG.DND5E.weaponProperties['fist'] = 'Fist';
        CONFIG.DND5E.weaponProperties['hafted'] = 'Hafted';
        CONFIG.DND5E.weaponProperties['momentum'] = 'Momentum';
        CONFIG.DND5E.weaponProperties['precision'] = 'Precision';
        CONFIG.DND5E.weaponProperties['swift'] = 'Swift';
        CONFIG.DND5E.weaponProperties['trip'] = 'Trip';

        CONFIG.DND5E.weaponProperties['crush'] = "Crush";
        CONFIG.DND5E.weaponProperties['efficient'] = "Efficient",
        CONFIG.DND5E.weaponProperties['exploit'] = "Exploit";
        CONFIG.DND5E.weaponProperties['flex'] = "Flex";
        CONFIG.DND5E.weaponProperties['flurry'] = "Flurry";
        CONFIG.DND5E.weaponProperties['sever'] = "Sever";
        CONFIG.DND5E.weaponProperties['penetrate'] = "Penetrate";
    }

    static async AddWeapons()
    {
        CONFIG.DND5E.weaponIds = [];
        CONFIG.DND5E.weaponIds['cestus'] = "dnd-plus.items-plus.LRz1dDN3Ic3Qw4uk";
        CONFIG.DND5E.weaponIds['clawgauntlet'] = "dnd-plus.items-plus.X2FZBx2YR5twA0im";
        CONFIG.DND5E.weaponIds['club'] = "dnd-plus.items-plus.2aaGVYy2wQq6oYic";
        CONFIG.DND5E.weaponIds['dagger'] = "dnd-plus.items-plus.TmZB6OZEDEYUhzzj";
        CONFIG.DND5E.weaponIds['greatclub'] = "dnd-plus.items-plus.PwTZ2KVj4g2M0i5v";
        CONFIG.DND5E.weaponIds['handaxe'] = "dnd-plus.items-plus.in8S2YR8Tlg9Tfor";
        CONFIG.DND5E.weaponIds['lighthammer'] = "dnd-plus.items-plus.uZghiR52kzdUVOvi";
        CONFIG.DND5E.weaponIds['parryingdagger'] = "dnd-plus.items-plus.doTqc5HSqGDtX8oD";
        CONFIG.DND5E.weaponIds['pickaxe'] = "dnd-plus.items-plus.rQaUjy5wpdp7erkx";
        CONFIG.DND5E.weaponIds['punchingdagger'] = "dnd-plus.items-plus.JCgsVLgQQZSADv3S";
        CONFIG.DND5E.weaponIds['quarterstaff'] = "dnd-plus.items-plus.Ro2EqQRSA4HWyGgI";
        CONFIG.DND5E.weaponIds['sickle'] = "dnd-plus.items-plus.pK24pDnl6j9NnnIc";
        CONFIG.DND5E.weaponIds['spear'] = "dnd-plus.items-plus.uxF19CgGoQmtyd0s";
        CONFIG.DND5E.weaponIds['lightcrossbow'] = "dnd-plus.items-plus.tNGVF31u9gkk943U";
        CONFIG.DND5E.weaponIds['shortbow'] = "dnd-plus.items-plus.78makCHJNmZwdPQe";
        CONFIG.DND5E.weaponIds['shuriken'] = "dnd-plus.items-plus.RLQtXuyVYHeGFnDM";
        CONFIG.DND5E.weaponIds['sling'] = "dnd-plus.items-plus.nS92E77UwSWtg6Q4";

        CONFIG.DND5E.weaponIds['doublesword'] = "dnd-plus.items-plus.GOdeMWi46FA8jSzm";
        CONFIG.DND5E.weaponIds['flail'] = "dnd-plus.items-plus.HzV2aVCp2MKRtjbi";
        CONFIG.DND5E.weaponIds['greataxe'] = "dnd-plus.items-plus.291yMI546pvuiH1f";
        CONFIG.DND5E.weaponIds['halberd'] = "dnd-plus.items-plus.a6f3qFxsLUkoRiXJ";
        CONFIG.DND5E.weaponIds['lance'] = "dnd-plus.items-plus.LBbKpm5qoXwJIkTj";
        CONFIG.DND5E.weaponIds['longsword'] = "dnd-plus.items-plus.SqnzJoxjvVlfU55E";
        CONFIG.DND5E.weaponIds['lucerne'] = "dnd-plus.items-plus.zwukKQnAsA7sfHbg";
        CONFIG.DND5E.weaponIds['mace'] = "dnd-plus.items-plus.afIn0HqHGTbyUxPh";
        CONFIG.DND5E.weaponIds['maul'] = "dnd-plus.items-plus.zMLpgd3g3XGfe298";
        CONFIG.DND5E.weaponIds['morningstarwhip'] = "dnd-plus.items-plus.jpdnHJBCgnsNjXiN";
        CONFIG.DND5E.weaponIds['nunchaku'] = "dnd-plus.items-plus.jsZuARa4YaQAIe9I";
        CONFIG.DND5E.weaponIds['pike'] = "dnd-plus.items-plus.17mveT9h8We1oHy0";
        CONFIG.DND5E.weaponIds['rapier'] = "dnd-plus.items-plus.zGYicwdrotOWVjB0";
        CONFIG.DND5E.weaponIds['sabre'] = "dnd-plus.items-plus.QbM0Kup4knZsQmEM";
        CONFIG.DND5E.weaponIds['scythe'] = "dnd-plus.items-plus.WxCGQerY2O84AbCy";
        CONFIG.DND5E.weaponIds['shortsword'] = "dnd-plus.items-plus.JS8fbXRTqv9Xk67B";
        CONFIG.DND5E.weaponIds['trident'] = "dnd-plus.items-plus.7P04AiYZaszTRMVH";
        CONFIG.DND5E.weaponIds['warmace'] = "dnd-plus.items-plus.uJ0w6VFsYARJJnod";
        CONFIG.DND5E.weaponIds['warpick'] = "dnd-plus.items-plus.7xbTPYy5g1BIpDRW";
        CONFIG.DND5E.weaponIds['warhammer'] = "dnd-plus.items-plus.X6ClFpIceSXs2hYi";
        CONFIG.DND5E.weaponIds['whip'] = "dnd-plus.items-plus.GToXh5ARWMGa6cI2";
        CONFIG.DND5E.weaponIds['zweihander'] = "dnd-plus.items-plus.7JibDfaNCoJwMe5Q";
        CONFIG.DND5E.weaponIds['arbalest'] = "dnd-plus.items-plus.7C6J84FKGEKGYhs2";
        CONFIG.DND5E.weaponIds['blowgun'] = "dnd-plus.items-plus.Hm7Hn64P2HKYpEHM";
        CONFIG.DND5E.weaponIds['bola'] = "dnd-plus.items-plus.v0GnLAxzCBnnnChf";
        CONFIG.DND5E.weaponIds['chakram'] = "dnd-plus.items-plus.lf6DDxH99He3tu3Z";
        CONFIG.DND5E.weaponIds['greatbow'] = "dnd-plus.items-plus.b4IwUzr2coSEKYTj";
        CONFIG.DND5E.weaponIds['handcrossbow'] = "dnd-plus.items-plus.pk7xbWxrrinpzbzE";
        CONFIG.DND5E.weaponIds['longbow'] = "dnd-plus.items-plus.44hSQ1wS1aOlUxWd";
        CONFIG.DND5E.weaponIds['repeatingcrossbow'] = "dnd-plus.items-plus.upJlvfjsF0soS4Yd";
    }

    static async AddArmors()
    {

        CONFIG.DND5E.armorIds = [];
        CONFIG.DND5E.armorIds['studdedleather'] = "dnd-plus.items-plus.b90zsDrcghVN3fNt";
        CONFIG.DND5E.armorIds['hidearmor'] = "dnd-plus.items-plus.4gZC1krxPjktEMsU";
        CONFIG.DND5E.armorIds['chainmail'] = "dnd-plus.items-plus.p0FLNjv7O8zWqrTv";
        CONFIG.DND5E.armorIds['ringmail'] = "dnd-plus.items-plus.OPiKXGWy0MZilHk2";
        CONFIG.DND5E.armorIds['breastplate'] = "dnd-plus.items-plus.rSw4KC5kv7OC1raE";
        CONFIG.DND5E.armorIds['brigandine'] = "dnd-plus.items-plus.XFYaCoJpPjTcwtKd";
        CONFIG.DND5E.armorIds['scalemail'] = "dnd-plus.items-plus.aJOce6sLA346QANx";
        CONFIG.DND5E.armorIds['halfplate'] = "dnd-plus.items-plus.unk29aZMF6theiGe";
        CONFIG.DND5E.armorIds['splint'] = "dnd-plus.items-plus.9a5UmSNn1Bs57TPT";
        CONFIG.DND5E.armorIds['fullplate'] = "dnd-plus.items-plus.v8GQvGwwzvoHsOPR";

        CONFIG.DND5E.shieldIds = [];
        CONFIG.DND5E.shieldIds['buckler'] = "dnd-plus.items-plus.fEUsUOoSebaEG8NV";
        CONFIG.DND5E.shieldIds['heater'] = "dnd-plus.items-plus.IEnW7C8Zvyf40k7O";
        CONFIG.DND5E.shieldIds['tower'] = "dnd-plus.items-plus.XqZT5LCnxaIEJQTe";
    }

    static async AddFlags()
    {
        CONFIG.DND5E.characterFlags['mainWDD'] = {
            name: "Main Weapon Damage Die", 
            hint: "Put here the weapon damage die of your primary equipped weapon. Call it with @dnd5e.flags.mainWDD", 
            section: "Damage Dies",
            type: String,
            placeholder: "1d6"}
          CONFIG.DND5E.characterFlags['secondWDD'] = {
            name: "Secondary Weapon Damage Die", 
            hint: "Put here the weapon damage die of your secondary(offhand) equipped weapon, if any. This refers to Dual Wielding. Call it with @dnd5e.flags.secondWDD", 
            section: "Damage Dies",
            type: String,
            placeholder: "1d6"}
          CONFIG.DND5E.characterFlags['abilitymod'] = {
            name: "Chosen Ability Mod", 
            hint: "Here goes the ability mod link to your ability score that your Maneuver stuff will use. Write it as @abilities.str.mod", 
            section: "Damage Dies",
            type: String,
            placeholder: "@abilities.str.mod"}
        CONFIG.DND5E.characterFlags['physcritrange'] = {
            name: "Physical Crit", 
            hint: "Automatic- Put here the number that the Attack crit range should be decreased by. 0 for crit range of 20. Call it with @dnd5e.flags.physcritrange", 
            section: "Damage Dies",
            type: Number,
            placeholder: "0"}
        CONFIG.DND5E.characterFlags['spellcritrange'] = {
            name: "Spell Crit", 
            hint: "Automatic- Put here the number that the Spell crit range should be decreased by. 0 for crit range of 20. Call it with @dnd5e.flags.spellcritrange", 
            section: "Damage Dies",
            type: Number,
            placeholder: "0"}
    }

    static async AddACCalculationTypes(){
        CONFIG.DND5E.armorClasses.unarmoredBarb.formula = "10 + @abilities.str.mod + @abilities.con.mod";

        CONFIG.DND5E.armorClasses['unarmoredFighter'] = { label: 'Unarmored Defence(Prowess)', formula: "10 + @abilities.dex.mod + @abilities.con.mod"}
        CONFIG.DND5E.armorClasses['unarmoredStrengthMonk'] = { label: 'Unarmored Defence(Strength Monk)', formula: "10 + @abilities.str.mod + @abilities.wis.mod"}
        CONFIG.DND5E.armorClasses['ancientways'] = { label: 'Ancient Ways Armor', formula: "@attributes.ac.armor + @abilities.wis.mod"}
        CONFIG.DND5E.armorClasses['lithe'] = { label: 'Lithe Armor', formula: "@attributes.ac.armor + @abilities.con.mod"}
        
    }
}

Hooks.once('setup', function () {
});

Hooks.on('ready', () => {
    DnDPlusSetup.AddWeaponProperties();
    DnDPlusSetup.AddWeapons();
    DnDPlusSetup.AddArmors();
});

Hooks.once("init", () => {
    DnDPlusSetup.AddFlags();
    DnDPlusSetup.AddACCalculationTypes();
    CONFIG.DND5E.featureTypes.class.subtypes['martialprowess'] = "Martial Prowess";

    CONFIG.DND5E.abilityActivationTypes['free'] = 'Free Action';
    CONFIG.DND5E.abilityActivationTypes['attack'] = 'Attack';

    CONFIG.DND5E.spellSchools['zerozeal'] = '0 Zeal';
    CONFIG.DND5E.spellSchools['onezeal'] = '1 Zeal';
    CONFIG.DND5E.spellSchools['twozeal'] = '2 Zeal';
    CONFIG.DND5E.spellSchools['threezeal'] = '3 Zeal';
    CONFIG.DND5E.spellSchools['fourzeal'] = '4 Zeal';

    CONFIG.DND5E.rangeTypes['awakr'] = 'Attack';
    CONFIG.DND5E.rangeTypes['mwakr'] = 'Melee Weapon';
    CONFIG.DND5E.rangeTypes['rwakr'] = 'Ranged Weapon';
});


