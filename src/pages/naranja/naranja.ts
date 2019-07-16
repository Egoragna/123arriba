import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NaranjaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-naranja',
  templateUrl: 'naranja.html',
})
export class NaranjaPage {

  
  Cambio=null;
  ControlEmocional=null;
  Automonitor=null;
  Iniciativa=null;
  MemoriaDeTrabajo=null;
  PlaneacionOrganizacion=null;
  MonitorDeTareas=null;
  OrganizacionDeMateriales=null;
  IndiceDeRegulacionConductual=null;
  IndiceMetacognitivo=null;
  FactorMetacognitivo=null;
  FactorRegulacionConductual=null;
  FactorRegulacionEmocional=null;
  EscalaNegatividad=null;
  EscalaDeInfrecuencia=null;
  EscalaDeInconsistencia=null;

  N1: boolean=true;
  O1: boolean=true;
  F1: boolean=true;
  resultado1: number;
  radio_select1(value) {
    if (value == 'N1') {
      this.resultado1 = 1;
    } else if (value == 'O1') {
      this.resultado1 = 2;
    } else if (value == 'F1') {
      this.resultado1 = 3;
    }
    return this.resultado1
  }

  Inhibicion: number;
  SumaInhibicion(){
    this.Inhibicion=this.resultado1
    return this.Inhibicion
  }


  N2: boolean=true;
  O2: boolean=true;
  F2: boolean=true;
  resultado2=null;
  radio_select2(value) {
    if (value == 'N2') {
      this.resultado2 = 1
    } else if (value == 'O2') {
      this.resultado2 = 2
    } else if (value == 'F2') {
      this.resultado2 = 3
    }
    return this.resultado2
  };

  N3: boolean=true;
  O3: boolean=true;
  F3: boolean=true;
  resultado3=null;
  radio_select3(value) {
    if (value == 'N3') {
      this.resultado3 = 1
    } else if (value == 'O3') {
      this.resultado3 = 2
    } else if (value == 'F3') {
      this.resultado3 = 3
    }
  };

  N4: boolean=true;
  O4: boolean=true;
  F4: boolean=true;
  resultado4=null;
  radio_select4(value) {
    if (value == 'N4') {
      this.resultado4 = 1
    } else if (value == 'O4') {
      this.resultado4 = 2
    } else if (value == 'F4') {
      this.resultado4 = 3
    }
  };

  N5: boolean=true;
  O5: boolean=true;
  F5: boolean=true;
  resultado5: number;
  radio_select5(value) {
    if (value == 'N5') {
      this.resultado5 = 1
    } else if (value == 'O5') {
      this.resultado5 = 2
    } else if (value == 'F5') {
      this.resultado5 = 3
    }
    return this.resultado5
  };

  N6: boolean=true;
  O6: boolean=true;
  F6: boolean=true;
  resultado6=null;
  radio_select6(value) {
    if (value == 'N6') {
      this.resultado6 = 1
    } else if (value == 'O6') {
      this.resultado6 = 2
    } else if (value == 'F6') {
      this.resultado6 = 3
    }
  };

  N7: boolean=true;
  O7: boolean=true;
  F7: boolean=true;
  resultado7=null;
  radio_select7(value) {
    if (value == 'N7') {
      this.resultado7 = 1
    } else if (value == 'O7') {
      this.resultado7 = 2
    } else if (value == 'F7') {
      this.resultado7 = 3
    }
  };

  N8: boolean=true;
  O8: boolean=true;
  F8: boolean=true;
  resultado8=null;
  radio_select8(value) {
    if (value == 'N8') {
      this.resultado8 = 1
    } else if (value == 'O8') {
      this.resultado8 = 2
    } else if (value == 'F8') {
      this.resultado8 = 3
    }
  };

  N9: boolean=true;
  O9: boolean=true;
  F9: boolean=true;
  resultado9=null;
  radio_select9(value) {
    if (value == 'N9') {
      this.resultado9 = 1
    } else if (value == 'O9') {
      this.resultado9 = 2
    } else if (value == 'F9') {
      this.resultado9 = 3
    }
  };

  N10: boolean=true;
  O10: boolean=true;
  F10: boolean=true;
  resultado10=null;
  radio_select10(value) {
    if (value == 'N10') {
      this.resultado10 = 1
    } else if (value == 'O10') {
      this.resultado10 = 2
    } else if (value == 'F10') {
      this.resultado10 = 3
    }
  };

  N11: boolean=true;
  O11: boolean=true;
  F11: boolean=true;
  resultado11=null;
  radio_select11(value) {
    if (value == 'N11') {
      this.resultado11 = 1
    } else if (value == 'O11') {
      this.resultado11 = 2
    } else if (value == 'F11') {
      this.resultado11 = 3
    }
  };

  N12: boolean=true;
  O12: boolean=true;
  F12: boolean=true;
  resultado12=null;
  radio_select12(value) {
    if (value == 'N12') {
      this.resultado12 = 1
    } else if (value == 'O12') {
      this.resultado12 = 2
    } else if (value == 'F12') {
      this.resultado12 = 3
    }
  };

  N13: boolean=true;
  O13: boolean=true;
  F13: boolean=true;
  resultado13=null;
  radio_select13(value) {
    if (value == 'N13') {
      this.resultado13 = 1
    } else if (value == 'O13') {
      this.resultado13 = 2
    } else if (value == 'F13') {
      this.resultado13 = 3
    }
  };

  N14: boolean=true;
  O14: boolean=true;
  F14: boolean=true;
  resultado14=null;
  radio_select14(value) {
    if (value == 'N14') {
      this.resultado14 = 1
    } else if (value == 'O14') {
      this.resultado14 = 2
    } else if (value == 'F14') {
      this.resultado14 = 3
    }
  };

  N15: boolean=true;
  O15: boolean=true;
  F15: boolean=true;
  resultado15=null;
  radio_select15(value) {
    if (value == 'N15') {
      this.resultado15 = 1
    } else if (value == 'O15') {
      this.resultado15 = 2
    } else if (value == 'F15') {
      this.resultado15 = 3
    }
  };

  N16: boolean=true;
  O16: boolean=true;
  F16: boolean=true;
  resultado16=null;
  radio_select16(value) {
    if (value == 'N16') {
      this.resultado16 = 1
    } else if (value == 'O16') {
      this.resultado16 = 2
    } else if (value == 'F16') {
      this.resultado16 = 3
    }
    return this.resultado16
  };

  N17: boolean=true;
  O17: boolean=true;
  F17: boolean=true;
  resultado17=null;
  radio_select17(value) {
    if (value == 'N17') {
      this.resultado17 = 1
    } else if (value == 'O17') {
      this.resultado17 = 2
    } else if (value == 'F17') {
      this.resultado17 = 3
    }
  };

  N18: boolean=true;
  O18: boolean=true;
  F18: boolean=true;
  resultado18=null;
  radio_select18(value) {
    if (value == 'N18') {
      this.resultado18 = 1
    } else if (value == 'O18') {
      this.resultado18 = 2
    } else if (value == 'F18') {
      this.resultado18 = 3
    }
  };

  N19: boolean=true;
  O19: boolean=true;
  F19: boolean=true;
  resultado19=null;
  radio_select19(value) {
    if (value == 'N19') {
      this.resultado19 = 1
    } else if (value == 'O19') {
      this.resultado19 = 2
    } else if (value == 'F19') {
      this.resultado19 = 3
    }
  };

  N20: boolean=true;
  O20: boolean=true;
  F20: boolean=true;
  resultado20=null;
  radio_select20(value) {
    if (value == 'N20') {
      this.resultado20 = 1
    } else if (value == 'O20') {
      this.resultado20 = 2
    } else if (value == 'F20') {
      this.resultado20 = 3
    }
  };

  N21: boolean=true;
  O21: boolean=true;
  F21: boolean=true;
  resultado21=null;
  radio_select21(value) {
    if (value == 'N21') {
      this.resultado21 = 1
    } else if (value == 'O21') {
      this.resultado21 = 2
    } else if (value == 'F21') {
      this.resultado21 = 3
    }
  };

  N22: boolean=true;
  O22: boolean=true;
  F22: boolean=true;
  resultado22=null;
  radio_select22(value) {
    if (value == 'N22') {
      this.resultado22 = 1
    } else if (value == 'O22') {
      this.resultado22 = 2
    } else if (value == 'F22') {
      this.resultado22 = 3
    }
  };

  N23: boolean=true;
  O23: boolean=true;
  F23: boolean=true;
  resultado23=null;
  radio_select23(value) {
    if (value == 'N23') {
      this.resultado23 = 1
    } else if (value == 'O23') {
      this.resultado23 = 2
    } else if (value == 'F23') {
      this.resultado23 = 3
    }
  };

  N24: boolean=true;
  O24: boolean=true;
  F24: boolean=true;
  resultado24=null;
  radio_select24(value) {
    if (value == 'N24') {
      this.resultado24 = 1
    } else if (value == 'O24') {
      this.resultado24 = 2
    } else if (value == 'F24') {
      this.resultado24 = 3
    }
  };

  N25: boolean=true;
  O25: boolean=true;
  F25: boolean=true;
  resultado25=null;
  radio_select25(value) {
    if (value == 'N25') {
      this.resultado25 = 1
    } else if (value == 'O25') {
      this.resultado25 = 2
    } else if (value == 'F25') {
      this.resultado25 = 3
    }
  };

  N26: boolean=true;
  O26: boolean=true;
  F26: boolean=true;
  resultado26=null;
  radio_select26(value) {
    if (value == 'N26') {
      this.resultado26 = 1
    } else if (value == 'O26') {
      this.resultado26 = 2
    } else if (value == 'F26') {
      this.resultado26 = 3
    }
  };

  N27: boolean=true;
  O27: boolean=true;
  F27: boolean=true;
  resultado27=null;
  radio_select27(value) {
    if (value == 'N27') {
      this.resultado27 = 1
    } else if (value == 'O27') {
      this.resultado27 = 2
    } else if (value == 'F27') {
      this.resultado27 = 3
    }
  };

  N28: boolean=true;
  O28: boolean=true;
  F28: boolean=true;
  resultado28=null;
  radio_select28(value) {
    if (value == 'N28') {
      this.resultado28 = 1
    } else if (value == 'O28') {
      this.resultado28 = 2
    } else if (value == 'F28') {
      this.resultado28 = 3
    }
  };

  N29: boolean=true;
  O29: boolean=true;
  F29: boolean=true;
  resultado29=null;
  radio_select29(value) {
    if (value == 'N29') {
      this.resultado29 = 1
    } else if (value == 'O29') {
      this.resultado29 = 2
    } else if (value == 'F29') {
      this.resultado29 = 3
    }
  };

  N30: boolean=true;
  O30: boolean=true;
  F30: boolean=true;
  resultado30=null;
  radio_select30(value) {
    if (value == 'N30') {
      this.resultado30 = 1
    } else if (value == 'O30') {
      this.resultado30 = 2
    } else if (value == 'F30') {
      this.resultado30 = 3
    }
  };

  N31: boolean=true;
  O31: boolean=true;
  F31: boolean=true;
  resultado31=null;
  radio_select31(value) {
    if (value == 'N31') {
      this.resultado31 = 1
    } else if (value == 'O31') {
      this.resultado31 = 2
    } else if (value == 'F31') {
      this.resultado31 = 3
    }
  };

  N32: boolean=true;
  O32: boolean=true;
  F32: boolean=true;
  resultado32=null;
  radio_select32(value) {
    if (value == 'N32') {
      this.resultado32 = 1
    } else if (value == 'O32') {
      this.resultado32 = 2
    } else if (value == 'F32') {
      this.resultado32 = 3
    }
  };

  N33: boolean=true;
  O33: boolean=true;
  F33: boolean=true;
  resultado33=null;
  radio_select33(value) {
    if (value == 'N33') {
      this.resultado33 = 1
    } else if (value == 'O33') {
      this.resultado33 = 2
    } else if (value == 'F33') {
      this.resultado33 = 3
    }
  };

  N34: boolean=true;
  O34: boolean=true;
  F34: boolean=true;
  resultado34=null;
  radio_select34(value) {
    if (value == 'N34') {
      this.resultado34 = 1
    } else if (value == 'O34') {
      this.resultado34 = 2
    } else if (value == 'F34') {
      this.resultado34 = 3
    }
  };

  N35: boolean=true;
  O35: boolean=true;
  F35: boolean=true;
  resultado35=null;
  radio_select35(value) {
    if (value == 'N35') {
      this.resultado35 = 1
    } else if (value == 'O35') {
      this.resultado35 = 2
    } else if (value == 'F35') {
      this.resultado35 = 3
    }
  };

  N36: boolean=true;
  O36: boolean=true;
  F36: boolean=true;
  resultado36=null;
  radio_select36(value) {
    if (value == 'N36') {
      this.resultado36 = 1
    } else if (value == 'O36') {
      this.resultado36 = 2
    } else if (value == 'F36') {
      this.resultado36 = 3
    }
  };

  N37: boolean=true;
  O37: boolean=true;
  F37: boolean=true;
  resultado37=null;
  radio_select37(value) {
    if (value == 'N37') {
      this.resultado37 = 1
    } else if (value == 'O37') {
      this.resultado37 = 2
    } else if (value == 'F37') {
      this.resultado37 = 3
    }
  };

  N38: boolean=true;
  O38: boolean=true;
  F38: boolean=true;
  resultado38=null;
  radio_select38(value) {
    if (value == 'N38') {
      this.resultado38 = 1
    } else if (value == 'O38') {
      this.resultado38 = 2
    } else if (value == 'F38') {
      this.resultado38 = 3
    }
  };

  N39: boolean=true;
  O39: boolean=true;
  F39: boolean=true;
  resultado39=null;
  radio_select39(value) {
    if (value == 'N39') {
      this.resultado39 = 1
    } else if (value == 'O39') {
      this.resultado39 = 2
    } else if (value == 'F39') {
      this.resultado39 = 3
    }
  };

  N40: boolean=true;
  O40: boolean=true;
  F40: boolean=true;
  resultado40=null;
  radio_select40(value) {
    if (value == 'N40') {
      this.resultado40 = 1
    } else if (value == 'O40') {
      this.resultado40 = 2
    } else if (value == 'F40') {
      this.resultado40 = 3
    }
  };

  N41: boolean=true;
  O41: boolean=true;
  F41: boolean=true;
  resultado41=null;
  radio_select41(value) {
    if (value == 'N41') {
      this.resultado41 = 1
    } else if (value == 'O41') {
      this.resultado41 = 2
    } else if (value == 'F41') {
      this.resultado41 = 3
    }
  };

  N42: boolean=true;
  O42: boolean=true;
  F42: boolean=true;
  resultado42=null;
  radio_select42(value) {
    if (value == 'N42') {
      this.resultado42 = 1
    } else if (value == 'O42') {
      this.resultado42 = 2
    } else if (value == 'F42') {
      this.resultado42 = 3
    }
  };

  N43: boolean=true;
  O43: boolean=true;
  F43: boolean=true;
  resultado43=null;
  radio_select43(value) {
    if (value == 'N43') {
      this.resultado43 = 1
    } else if (value == 'O43') {
      this.resultado43 = 2
    } else if (value == 'F43') {
      this.resultado3 = 3
    }
  };

  N44: boolean=true;
  O44: boolean=true;
  F44: boolean=true;
  resultado44=null;
  radio_select44(value) {
    if (value == 'N44') {
      this.resultado44 = 1
    } else if (value == 'O44') {
      this.resultado44 = 2
    } else if (value == 'F44') {
      this.resultado44 = 3
    }
  };

  N45: boolean=true;
  O45: boolean=true;
  F45: boolean=true;
  resultado45=null;
  radio_select45(value) {
    if (value == 'N45') {
      this.resultado45 = 1
    } else if (value == 'O45') {
      this.resultado45 = 2
    } else if (value == 'F45') {
      this.resultado45 = 3
    }
  };

  N46: boolean=true;
  O46: boolean=true;
  F46: boolean=true;
  resultado46=null;
  radio_select46(value) {
    if (value == 'N46') {
      this.resultado46 = 1
    } else if (value == 'O46') {
      this.resultado46 = 2
    } else if (value == 'F46') {
      this.resultado46 = 3
    }
  };

  N47: boolean=true;
  O47: boolean=true;
  F47: boolean=true;
  resultado47=null;
  radio_select47(value) {
    if (value == 'N47') {
      this.resultado47 = 1
    } else if (value == 'O47') {
      this.resultado47 = 2
    } else if (value == 'F47') {
      this.resultado47 = 3
    }
  };

  N48: boolean=true;
  O48: boolean=true;
  F48: boolean=true;
  resultado48=null;
  radio_select48(value) {
    if (value == 'N48') {
      this.resultado48 = 1
    } else if (value == 'O48') {
      this.resultado48 = 2
    } else if (value == 'F48') {
      this.resultado48 = 3
    }
  };

  N49: boolean=true;
  O49: boolean=true;
  F49: boolean=true;
  resultado49=null;
  radio_select49(value) {
    if (value == 'N49') {
      this.resultado49 = 1
    } else if (value == 'O49') {
      this.resultado49 = 2
    } else if (value == 'F49') {
      this.resultado49 = 3
    }
  };

  N50: boolean=true;
  O50: boolean=true;
  F50: boolean=true;
  resultado50=null;
  radio_select50(value) {
    if (value == 'N50') {
      this.resultado50 = 1
    } else if (value == 'O50') {
      this.resultado50 = 2
    } else if (value == 'F50') {
      this.resultado50 = 3
    }
  };

  N51: boolean=true;
  O51: boolean=true;
  F51: boolean=true;
  resultado51=null;
  radio_select51(value) {
    if (value == 'N51') {
      this.resultado51 = 1
    } else if (value == 'O51') {
      this.resultado51 = 2
    } else if (value == 'F51') {
      this.resultado51 = 3
    }
  };

  N52: boolean=true;
  O52: boolean=true;
  F52: boolean=true;
  resultado52=null;
  radio_select52(value) {
    if (value == 'N52') {
      this.resultado52 = 1
    } else if (value == 'O52') {
      this.resultado52 = 2
    } else if (value == 'F52') {
      this.resultado52 = 3
    }
  };

  N53: boolean=true;
  O53: boolean=true;
  F53: boolean=true;
  resultado53=null;
  radio_select53(value) {
    if (value == 'N53') {
      this.resultado53 = 1
    } else if (value == 'O53') {
      this.resultado53 = 2
    } else if (value == 'F53') {
      this.resultado53 = 3
    }
  };

  N54: boolean=true;
  O54: boolean=true;
  F54: boolean=true;
  resultado54=null;
  radio_select54(value) {
    if (value == 'N54') {
      this.resultado54 = 1
    } else if (value == 'O54') {
      this.resultado54 = 2
    } else if (value == 'F54') {
      this.resultado54 = 3
    }
  };

  N55: boolean=true;
  O55: boolean=true;
  F55: boolean=true;
  resultado55=null;
  radio_select55(value) {
    if (value == 'N55') {
      this.resultado55 = 1
    } else if (value == 'O55') {
      this.resultado55 = 2
    } else if (value == 'F55') {
      this.resultado55 = 3
    }
  };

  N56: boolean=true;
  O56: boolean=true;
  F56: boolean=true;
  resultado56=null;
  radio_select56(value) {
    if (value == 'N56') {
      this.resultado56 = 1
    } else if (value == 'O56') {
      this.resultado56 = 2
    } else if (value == 'F56') {
      this.resultado56 = 3
    }
  };

  N57: boolean=true;
  O57: boolean=true;
  F57: boolean=true;
  resultado57=null;
  radio_select57(value) {
    if (value == 'N57') {
      this.resultado57 = 1
    } else if (value == 'O57') {
      this.resultado57 = 2
    } else if (value == 'F57') {
      this.resultado57 = 3
    }
  };

  N58: boolean=true;
  O58: boolean=true;
  F58: boolean=true;
  resultado58=null;
  radio_select58(value) {
    if (value == 'N58') {
      this.resultado58 = 1
    } else if (value == 'O58') {
      this.resultado58 = 2
    } else if (value == 'F58') {
      this.resultado58 = 3
    }
  };

  N59: boolean=true;
  O59: boolean=true;
  F59: boolean=true;
  resultado59=null;
  radio_select59(value) {
    if (value == 'N59') {
      this.resultado59 = 1
    } else if (value == 'O59') {
      this.resultado59 = 2
    } else if (value == 'F59') {
      this.resultado59 = 3
    }
  };

  N60: boolean=true;
  O60: boolean=true;
  F60: boolean=true;
  resultado60=null;
  radio_select60(value) {
    if (value == 'N60') {
      this.resultado60 = 1
    } else if (value == 'O60') {
      this.resultado60 = 2
    } else if (value == 'F60') {
      this.resultado60 = 3
    }
  };

  N61: boolean=true;
  O61: boolean=true;
  F61: boolean=true;
  resultado61=null;
  radio_select61(value) {
    if (value == 'N61') {
      this.resultado61 = 1
    } else if (value == 'O61') {
      this.resultado61 = 2
    } else if (value == 'F61') {
      this.resultado61 = 3
    }
  };

  N62: boolean=true;
  O62: boolean=true;
  F62: boolean=true;
  resultado62=null;
  radio_select62(value) {
    if (value == 'N62') {
      this.resultado62 = 1
    } else if (value == 'O62') {
      this.resultado62 = 2
    } else if (value == 'F62') {
      this.resultado62 = 3
    }
  };

  N63: boolean=true;
  O63: boolean=true;
  F63: boolean=true;
  resultado63=null;
  radio_select63(value) {
    if (value == 'N63') {
      this.resultado63 = 1
    } else if (value == 'O63') {
      this.resultado63 = 2
    } else if (value == 'F63') {
      this.resultado63 = 3
    }
  };

  N64: boolean=true;
  O64: boolean=true;
  F64: boolean=true;
  resultado64=null;
  radio_select64(value) {
    if (value == 'N64') {
      this.resultado64 = 1
    } else if (value == 'O64') {
      this.resultado64 = 2
    } else if (value == 'F64') {
      this.resultado64 = 3
    }
  };

  N65: boolean=true;
  O65: boolean=true;
  F65: boolean=true;
  resultado65=null;
  radio_select65(value) {
    if (value == 'N65') {
      this.resultado65 = 1
    } else if (value == 'O65') {
      this.resultado65 = 2
    } else if (value == 'F65') {
      this.resultado65 = 3
    }
  };

  N66: boolean=true;
  O66: boolean=true;
  F66: boolean=true;
  resultado66=null;
  radio_select66(value) {
    if (value == 'N66') {
      this.resultado6 = 1
    } else if (value == 'O66') {
      this.resultado66 = 2
    } else if (value == 'F66') {
      this.resultado66 = 3
    }
  };

  N67: boolean=true;
  O67: boolean=true;
  F67: boolean=true;
  resultado67=null;
  radio_select67(value) {
    if (value == 'N67') {
      this.resultado67 = 1
    } else if (value == 'O67') {
      this.resultado67 = 2
    } else if (value == 'F67') {
      this.resultado67 = 3
    }
  };

  N68: boolean=true;
  O68: boolean=true;
  F68: boolean=true;
  resultado68=null;
  radio_select68(value) {
    if (value == 'N68') {
      this.resultado68 = 1
    } else if (value == 'O68') {
      this.resultado68 = 2
    } else if (value == 'F68') {
      this.resultado68 = 3
    }
  };

  N69: boolean=true;
  O69: boolean=true;
  F69: boolean=true;
  resultado69=null;
  radio_select69(value) {
    if (value == 'N69') {
      this.resultado69 = 1
    } else if (value == 'O69') {
      this.resultado69 = 2
    } else if (value == 'F69') {
      this.resultado69 = 3
    }
  };

  N70: boolean=true;
  O70: boolean=true;
  F70: boolean=true;
  resultado70=null;
  radio_select70(value) {
    if (value == 'N70') {
      this.resultado70 = 1
    } else if (value == 'O70') {
      this.resultado70 = 2
    } else if (value == 'F70') {
      this.resultado70 = 3
    }
  };

  N71: boolean=true;
  O71: boolean=true;
  F71: boolean=true;
  resultado71=null;
  radio_select71(value) {
    if (value == 'N71') {
      this.resultado71 = 1
    } else if (value == 'O71') {
      this.resultado71 = 2
    } else if (value == 'F71') {
      this.resultado71 = 3
    }
  };

  N72: boolean=true;
  O72: boolean=true;
  F72: boolean=true;
  resultado72=null;
  radio_select72(value) {
    if (value == 'N72') {
      this.resultado72 = 1
    } else if (value == 'O72') {
      this.resultado72 = 2
    } else if (value == 'F72') {
      this.resultado72 = 3
    }
  };

  N73: boolean=true;
  O73: boolean=true;
  F73: boolean=true;
  resultado73=null;
  radio_select73(value) {
    if (value == 'N73') {
      this.resultado73 = 1
    } else if (value == 'O73') {
      this.resultado73 = 2
    } else if (value == 'F73') {
      this.resultado73 = 3
    }
  };

  
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NaranjaPage');
  }

}
