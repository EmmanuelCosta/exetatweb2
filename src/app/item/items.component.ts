import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Item }                from './item';
import { ItemService }         from './item.service';

@Component({
  moduleId: module.id,
  selector: 'items',
  templateUrl: 'items.component.html'
})

export class ItemsComponent implements OnInit {
  items: Item[];
  selecteditem: Item;
  constructor(
    private itemService: ItemService,
    private router: Router) { }
  getItems(): void {
    this.itemService
        .getItems()
        .then(items => this.items = items);
  }

  ngOnInit(): void {
    this.getItems();
  }

  onSelect(item: Item): void {
    this.selecteditem = item;
  }
}