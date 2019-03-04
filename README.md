
ElasTest Recommendation Engine
=================
ElasTest Recommendation Engine (ERE) supports test automation developers by providing two types of recommendations. First, it recommends complete Java implementations of unit test cases based on short descriptions in natural language provided by a tester. Second, it recommends a list of test cases that are most relevant to the test case generated based on user's description.

ERE is based on Neural Translation Model - a state-of-the-art approach to machine translation applied to code generation. It is trained on data stored in software repositories to learn deep vector representations of source code modules, and uses these representations to map natural language descriptions to source code (for the first type of recommendations) and to compute the degree of similarity between test cases (for the second type of recommendations). 

Users can upload their own, project-specific test data to train custom machine learning models. Current implementation supports training on, and recommending of unit test cases written in Java.

## Features
Feature | Description 
---------| ----------- 
Recommending new automated test cases | Based on short natural language description of a test case, user receives recommended Java implementation of that test case (newly generated code).
Recommending automated test cases for reuse/adaptation | Based on short natural language description of a test case, user receives a list of existing automated test cases that are most relevant to the query.
<a name="pipelinedesc"></a>Automated end-to-end preprocessing pipeline | User can initiate automated process that includes loading data from a remote or local repository, crawling the repositories and selecting relevant data, parsing and cleaning, synthetizing training corpora and extracting vocabularies.
Training custom models | Users can train custom models on project-specific data. 
Flexible storage | Users can choose to store their data: (1) directly on the local filesystem; (2) on ElasTest Alluxio instance.
Graphical User Interface | User can perform all the above operations via GUI, which is embedded as an iframe in ElasTest Dashboard. 

## How to run
ElasTest Recommendation Engine runs in the context of [ElasTest platform](https://elastest.io/docs/) and can be launched from ElasTest Dashboard.

#### Procedure
1. Start ElasTest platform.
2. Use browser to access ElasTest Dashboard.
3. Navigate to Test Engines page and start 'ere'.
4. Click on eye icon to access ERE UI.

![alt text](img/test-engines.png)

## Explore ERE UI
User interface is logically divided into Tester part and Admin part. Within Tester UI, user can choose the model to query, input natural language descriptions and view the recommendations. 
Admin Dashboard enables uploading user data, launching automated preprocessing and launching training of custom models.

![alt text](img/query/default-settings1.png)

### Default Settings
This is a simple configuration panel to allow you to view the available models and choose the one to be queried. Click on the More Options menu to open the panel, expand Models dropdown, select a model and click Save. The selected model will be used for generating recommendations. You can now return to the main page and query for recommendations. 

Note: Default Settings shows models that are already trained. Two models trained on large open-source repositories - [ReactiveX](https://github.com/ReactiveX/RxJava) and [spring-framework](https://github.com/spring-projects/spring-framework) - are provided for demonstration purposes. You can train your own models using [Admin Dashboard](#admin_dashboard), and they will be available in Default Settings after the training process has completed.

<img src="img/query/default-settings2.png" alt="ecie" align="middle" width="450px"/>

### New Recommendation wizard
Click on 'New Recommendation' button in the main page to enter a description of a test case. In the 'Area Description' field, provide a more general description of the tested area, such as a description of class under test. In the 'Task Description' field, indicate the specific task or functionality to be tested. Click OK to submit your query.

![alt text](img/query/enter-query.png)

### Results Page
For each query, ERE produces two types of recommendations: (1) new code generated from the area and task description, and (2) a list of existing test cases retrieved from the software repository based on their similarity to the generated test case.

#### Generated code
The new code inferred by the machine learning model is checked for compilability. If it compiles, it is displayed on the top of the page, otherwise it is skipped. 

![alt text](img/query/query_results1.png)

#### Test cases for reuse
The list of existing test cases recommended for re-use is displayed in a table. The table provides infomation that helps to locate the reusable test cases in the repository. Each row includes the name of the class containing the recommended test method, the name of that method, and the score indicating the degree of similarity to the generated code. 

Click on 'Show Details' link to display the body of the method. 

Hover over a class name to view package name.

![alt text](img/query/query_results2.png)

### Admin Dashboard
Admin Dashboard, accessed via 'More Option' button in the main page, comprises three tabs corresponding to main admin activities required for training a custom model on project-specific data defined by the user: Preprocess, Submit Data and Train.

#### Preprocess tab
This tab combines loading data and pushing them through the [preprocessing pipeline](#pipelinedesc). After providing all the required information, click Preprocess button and wait for the confirmation message. Preprocessed dataset will be added to the list of datasets in 'Submit Dataset' tab. The following paragraphs explain in detail the input required for each field.

##### Loading data
Data can be loaded from a repository stored on your local filesystem or from a remote location. For the first option, select **Local** radio button, click on 'Select Local Repository' button and navigate to the directory storing data in a zip file. You can specify a custom name for the dataset, which also will be used as the model name. If you do not specify the label, zip file name will be used as both dataset and model label.

![alt text](img/preprocess/load.png)

To load data from a remote location, select **Remote** option, and provide url for the remote repository. As with the local option, you can specify custom label for your dataset and model.

![alt text](img/preprocess/load_remote.png)

##### Storage type
Choose the preferred option for storing preprocessed datasets:
*  Local: datasets will be saved directly on your local filesystem. This option is available via Docker volume created when ERE container is started. The volume maps to a default location `<user-home>/ere-data`. 
* Alluxio: datasets will be stored on Alluxio provided by  [ElasTest Data Manager](https://github.com/elastest/elastest-data-manager/blob/master/docs/index.md). Alluxio instance is only available when the platform runs in [experimental](https://elastest.io/docs/experimental/) mode.

##### Add Comments
This setting applies to one of the final steps in pre-processing pipeline, which is synthetising training corpora. User can choose whether to include inline comments in the training data or to reject these comments. Which option should be used, depends very much on the quality and consistency of inline comments occurring in your test data. If unsure, leave this option unchecked. 

##### Sequence Lengths
You can specify the minimum and maximum length of sequences that will be included in the source and target training corpus. The recommended minimum value is 5, since shorter sequences are not likely to be meaningful. Optimal value for maximum length depends on test data characteristics; the recommended value is between 50 and 300. 

#### Submit Dataset tab
This tab allows you to view, select and submit for training all pre-processed datasets availble on on your system. Select the dataset you want to send to the machine learning executor, and click Submit button. The submitted dataset will be added to Data Collections available in Train tab.

#### Train tab
In this tab user can view Data Collections available for training, select the one you want to train the model for, and launch training process. Note that training is a lengthy process, typically taking from 3 to 8 hours. The exact time depends on the size of the Data Collection, which is the function of the number of test cases in the original software repository, and sequence lengths specified at preprocessing stage.

After completed training, the new model is available in [Default Settings](#default_settings) dropdown list, and can be queried for recommendations.


