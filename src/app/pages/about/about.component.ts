import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
    features = [
      { icon: '🔮', title: 'AI-Powered No-Show Prediction', description: 'Reduce lost revenue by predicting when no-shows are most likely.' },
      { icon: '📅', title: 'Smart Scheduling', description: 'Intelligent scheduling engine that optimizes your business hours.' },
      { icon: '💡', title: 'Personalized Recommendations', description: 'Offer clients personalized time slots that fit their schedules.' },
      { icon: '📱', title: 'Mobile-Friendly Interface', description: 'Clean, modern interface for seamless management.' }
    ];
  
    steps = [
      { number: '1', title: 'Set Up Your Business', description: 'Simply input your working hours, resources, and preferences.' },
      { number: '2', title: 'AI at Work', description: 'Our algorithms learn from past client behavior to predict no-shows.' },
      { number: '3', title: 'Smart Scheduling', description: 'We handle the heavy lifting, automatically adjusting appointments.' }
    ];
  
    benefits = [
      { icon: '⏰', title: 'Save Time', description: 'Reduce time spent managing appointments manually.' },
      { icon: '💰', title: 'Increase Revenue', description: 'Maximize appointment capacity by reducing no-shows.' },
      { icon: '😊', title: 'Delight Clients', description: 'Offer a seamless, personalized experience.' }
    ];
  
}
