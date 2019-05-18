import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-top5-questions',
  templateUrl: './questions-home.component.html',
  styleUrls: ['./questions-home.component.scss']
})
export class QuestionsHomeComponent implements OnInit {

  /**
   * Select Questions:
   * Related Topic and Status = open
   * Select top 10 most relevant questions (with more answers) 
   */
  private questions: any = [
    { title: '1.Title 12356?', timestamp: new Date(), topic: 'Tecnology'},
    { title: '2.Rfrbfytgvntynvihafadfas?', timestamp: new Date(), topic: 'Tecnology'},
    { title: '3.Qtrdbythvgvjbhkllcassd x?', timestamp: new Date(), topic: 'Business'},
    { title: '4.Affcnvtmuib sfh v abmaf?', timestamp: new Date(), topic: 'Health'},
    { title: '5.ASDFGH dcmYG HOABFDHOA?', timestamp: new Date(), topic: 'Health'},
    { title: '6.TPOKMNG jnycsvdgv nGGVCHV?', timestamp: new Date(), topic: 'Business'},
    { title: '7.Ybhbjn hhyvhbjhmgncsjgcb adjhbcn cjzx Ajgvncsaiuvjnafd?', timestamp: new Date(), topic: 'Tecnology'},
    { title: '8.Cbrfuxygminlsf?', timestamp: new Date(), topic: 'Tecnology'},
    { title: '9.Mnucywoubhah oucqnifjnvle?', timestamp: new Date(), topic: 'Business'},
    { title: '10.Wbua fdh njfkvjnkd?', timestamp: new Date(), topic: 'Tecnology'},
    { title: '11.Ibcjavgdcbhbshhhhbh sdm?', timestamp: new Date(), topic: 'Business'},
    { title: '12.Opnkasfjnfjnvjadfvnaldkf?', timestamp: new Date(), topic: 'Health'},
    { title: '13.Pqwertyuisdrsfty ghujcfvgbhnjedgrftgyhu?', timestamp: new Date(), topic: 'Tecnology'},
    { title: '14.Hscsgvdvj asihicywechecs dksjdcjks aduhjkd?', timestamp: new Date(), topic: 'Business'},
    { title: '15.Zvdf gbbg?', timestamp: new Date(), topic: 'Health'},
    { title: '16.Zvdf gbbg?', timestamp: new Date(), topic: 'Business'},
    { title: '17.Zvdf gbbg?', timestamp: new Date(), topic: 'Tecnology'},
  ];

  private topics: any;
  private subscription: Subscription;

  constructor(private router: ActivatedRoute) {
    this.subscription = this.router.params.subscribe(param => {
      this.topics = this.questions.filter(data => data.topic == param.topic);
    });
    
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
