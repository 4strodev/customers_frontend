import { Component, OnInit } from '@angular/core';
import { ethers } from "ethers";

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  provider: ethers.providers.BaseProvider | undefined;

  constructor() { }

  async ngOnInit(): Promise<void> {
    const wallet = ethers.Wallet.createRandom()
    console.log(wallet);
    // todo: create wallet with password
  }
}
