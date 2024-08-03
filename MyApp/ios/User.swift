//
//  User.swift
//  MyApp
//
//  Created by Abhijit Tambe on 7/30/24.
//

import Foundation

@objc(User)
class User: NSObject {
  private var firstName : NSString = "";
  private var lastName : NSString = "";
  private var age: NSNumber = 0;
  
  @objc
  func create(_ firstName:NSString,lastName:NSString,age:NSNumber,callback:RCTResponseSenderBlock ){
    let newUser = User();
    newUser.firstName = firstName;
    newUser.lastName = lastName;
    newUser.age = age;
    
    let result : NSMutableArray = [];
    let userData :NSMutableDictionary = [:];
    userData["firstName"] = newUser.firstName;
    userData["lastName"] = newUser.lastName;
    userData["age"] = newUser.age;
    result.add(userData);
    
    //for item in Items:
    print("create user",userData);
    callback([userData])
  }
  
}
