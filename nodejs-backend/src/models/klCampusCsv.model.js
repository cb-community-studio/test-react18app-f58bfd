    // See http://mongoosejs.com/docs/models.html
    // for more of what you can do here.
    module.exports = function (app) {
        const modelName = 'klCampusCsv';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
                   campus: { type: String, unique: false, lowercase: false, default: '' },
       programme: { type: String, unique: false, lowercase: false, default: '' },
       yearSemester: { type: String, unique: false, lowercase: false, default: '' },
       intake: { type: String, unique: false, lowercase: false, default: '' },
       subject: { type: Undefined, unique: false, lowercase: false, default: '' },

            
          },
          {
            timestamps: true
        });
      
        // This is necessary to avoid model compilation errors in watch mode
        // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };