import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title for the project'],
    maxlength: [100, 'Title cannot be more than 100 characters'],
  },
  description: {
    type: String,
    required: [true, 'Please provide a description'],
  },
  imageUrl: {
    type: String,
    required: [true, 'Please provide an image URL'],
  },
  projectUrl: {
    type: String,
    required: [true, 'Please provide a project URL'],
  },
  technologies: [{
    type: String,
    required: [true, 'Please provide at least one technology'],
  }],
  featured: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Project || mongoose.model('Project', ProjectSchema); 