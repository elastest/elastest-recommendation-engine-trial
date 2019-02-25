'''
Created on 20 Feb 2019

@author: karol
'''

import logging
import unittest

from model.nmcg.model_api.trial_ere_api import Recommender

logging.basicConfig(level=logging.DEBUG)


class Test(unittest.TestCase):

    def setUp(self):
        logging.info("Setting up test ")
        
        self.query = [
            "multimap subject test", "convert map to object",
            "get elements in ranges handler test", "method should return nothing when no edges set byte entity store",
            "big decimals assert equal by comparison test", "method should fail if actual is null whatever custom comparison strategy is",
            "doubles assert less than or equal to test", "method should pass if actual is less than other",
            "database meta data get columns test", "method test char octet length has right value tdb array"
            
            ]
        
        self.responses = [
            "Multimap < String , String > multimap = ImmutableMultimap.of",
            "shouldReturnNothingWhenNoEdgesSet ( byteEntityStore )",
            "assertThatExceptionOfType ( AssertionError.class ).isThrownBy",
            "doubles.assertLessThanOrEqualTo ( someInfo ( ) , 6d , 8d )",
            "assertThat ( mdrReqARRAY.getString ("
            
            ]
        
    def tearDown(self):
        logging.info("Tear down test ")
    
    def testRecommendResponseContent(self):
        """
        Unit test to verify that inserted area and task are correct parsed 
        and recommend test case come back with correct content
        
        Test reads params from list query and compare output with list responses
        
        """
        logging.info("Verify recommended response content")
        
        i = 0
        j = 0
        for params in self.query[:5]:
            params = {"query":{"area": "" + self.query[0 + i] + "", "task": "" + self.query[1 + i] + ""}}
            i = i + 2 
            myRec = Recommender()
            logging.info("Sending query: %s", params)
            response = myRec.recommend(params)
            logging.info("Response from model: %s", response)
            
            try: 
                self.assertIn(self.responses[0 + j], response)
                logging.info("response contains: %s", self.responses[0 + j])
            except:
                logging.error("response does contains: %s", self.responses[0 + j])
            
            j = j + 1


if __name__ == "__main__":
    # import sys;sys.argv = ['', 'Test.testName']
    unittest.main()
