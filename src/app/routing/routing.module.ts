import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdersComponent } from '../orders/orders.component';
import { MessagesComponent } from '../messages/messages.component';
import { SubscriptionComponent } from '../subscription/subscription.component';

const appRoutes = [
	{path: 'orders', component: OrdersComponent},
	{path: 'messages', component: MessagesComponent},
	{path: 'subs', component: SubscriptionComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class RoutingModule { }
