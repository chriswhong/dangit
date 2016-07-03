# dangit
DAta Nudged into GIT - File-based datasets that use git for version control of individual records

#Overview 
DANGIT is an experimental way to do version control on datasets.  By storing each row of a dataset as a file in a github repository, it is possible to track changes to individual rows of data and use the same open architecture used to write open source code for maintaining open data.  [Here's a gist](https://gist.github.com/chriswhong/8efd249a58abfa8b39b68bca198e1072) with a braindump for the idea.

In the future, a simple UI with Github Single Sign-on would allow non-technical users to perform the entire fork/edit/build/pull request workflow without using the command line or editing text files.  

##How to Use
- Clone this repo
- Install Dependencies
`npm install`
- Clone the sample dataset [nyc-pizzashops](https://github.com/chriswhong/nyc-pizzashops)
- Edit or add data to the sample dataset by editing files in `/rows`
- Use DANGIT to build the dataset with your new changes
`node dangit build ../nyc-pizzashops`
- Create a Pull Request to submit your changes to the source repo

#How it works

##Dataset storage
 A dataset is maintained in its own github repository with file structure like this:
 ```
 /build - the build directory, where dangit writes the built dataset file (a geojson FeatureCollection or a CSV or a JSON array of objects) the build filename should be the same as the dataset's name, with the appropriate file extension
 /rows - the rows directory, where individual rows are stored as geojson features or 2D json objects
 dangit.json - the dangit configuration file, which includes name, type, uid field, etc.
 ```
##Editing data
Edits are made on the files in `/rows`, new data are added by creating new files (for now, increment uid manually.  Someday the build process should validate unique ids, data types, etc)

##Building data
Run DANGIT build using node, passing in the path of the dataset you would like to build:
`node dangit build ../nyc-pizzashops`
DANGIT looks for a `dangit.json` file in the root of the directory you pass in, and starts the build based on `type`.  For type `geojson`, it will expect each file in `/rows` to be a valid geojson feature, and will write a geojson FeatureCollection into `/build`.

##Sample Dataset
You can participate in our early experimentation by adding or editing (or deleting) rows to the dataset [nyc-pizzashops](https://github.com/chriswhong/nyc-pizzashops).  Fork the repo, make your changes to the rows, build the distribution file, and do a pull request back to the source repo.

##Commit Messages
Commit messages should include as much info as possible about the rows that were edited/added/removed. 

##Pull Requests
Pull requests on dataset repos should include a successful build of the data.  (how should we validate this)
