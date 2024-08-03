//
//  User.m
//  MyApp
//
//  Created by Abhijit Tambe on 7/30/24.
//

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(User,NSObject);

RCT_EXTERN_METHOD(create: (nonnull NSString)firstName
                  lastName: (nonnull NSString)lastName
                  age: (nonnull NSNumber)age
                  callback: (RCTResponseSenderBlock)callback);
@end
