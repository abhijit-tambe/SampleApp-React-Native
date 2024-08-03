//
//  Counter.m
//  MyApp
//
//  Created by Abhijit Tambe on 7/29/24.
//

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(Counter,NSObject);

RCT_EXTERN_METHOD(increment: (nonnull NSNumber)num
                  callback: (RCTResponseSenderBlock)callback )

@end

