import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Portfolio data fetch functions
export const getProfile = async () => {
  const { data, error } = await supabase.from('profile').select('*').single();
  if (error) throw error;
  return data;
};

export const getSkills = async () => {
  const { data, error } = await supabase.from('skills').select('*').order('level', { ascending: false });
  if (error) throw error;
  return data;
};

export const getExperience = async () => {
  const { data, error } = await supabase.from('experience').select('*').order('start_date', { ascending: false });
  if (error) throw error;
  return data;
};

export const getProjects = async () => {
  const { data, error } = await supabase.from('projects').select('*').order('featured', { ascending: false });
  if (error) throw error;
  return data;
};

export const getEducation = async () => {
  const { data, error } = await supabase.from('education').select('*').order('end_date', { ascending: false });
  if (error) throw error;
  return data;
};

export const getCertifications = async () => {
  const { data, error } = await supabase.from('certifications').select('*').order('date', { ascending: false });
  if (error) throw error;
  return data;
};

export const submitContactForm = async (formData) => {
  const { data, error } = await supabase.from('contact_messages').insert([formData]);
  if (error) throw error;
  return data;
};

export const getAllPortfolioData = async () => {
  const [profile, skills, experience, projects, education, certifications] = await Promise.all([
    getProfile(),
    getSkills(),
    getExperience(),
    getProjects(),
    getEducation(),
    getCertifications()
  ]);

  return {
    profile,
    skills,
    experience,
    projects,
    education,
    certifications
  };
};
