//
//  Counter.swift
//  MyApp
//
//  Created by Abhijit Tambe on 7/29/24.
//

import Foundation

@objc(Counter)
class Counter: NSObject{
  
  private var count=0;
  
  @objc
  func increment(_ num:NSNumber, callback:RCTResponseSenderBlock){
    count = count + Int(truncating: num);
    print(count);
    callback([count])
  }
  
  @objc
  static func requiresMainQueueSetup() ->Bool{
    return true;
  }
  
  @objc
  func constantsToExport() ->[String:Any]! {
    return ["initialCount":count]
  }
}
