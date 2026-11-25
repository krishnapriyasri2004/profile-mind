import test from 'node:test';
import assert from 'node:assert/strict';
import { FEATURED_PROJECTS, REPOSITORIES } from '../data/portfolioData';
import {
  filterFeaturedProjects,
  filterRepositories,
  generateAtsResumePlainText,
  resolveInitialTheme,
  validateContactForm,
} from './portfolioFilters';

test('resolveInitialTheme honors explicit stored value over system preference', () => {
  assert.equal(resolveInitialTheme('dark', false), 'dark');
  assert.equal(resolveInitialTheme('light', true), 'light');
  assert.equal(resolveInitialTheme(null, true), 'dark');
  assert.equal(resolveInitialTheme(undefined, false), 'light');
});

test('filterFeaturedProjects returns all or narrows cleanly by category', () => {
  const all = filterFeaturedProjects(FEATURED_PROJECTS, 'All');
  assert.equal(all.length, FEATURED_PROJECTS.length);

  const aiOnly = filterFeaturedProjects(FEATURED_PROJECTS, 'Applied AI');
  assert.ok(aiOnly.length >= 2);
  assert.ok(aiOnly.every((p) => p.category === 'Applied AI'));

  const dataOnly = filterFeaturedProjects(FEATURED_PROJECTS, 'Data & BI');
  assert.ok(dataOnly.length >= 2);
  assert.ok(dataOnly.every((p) => p.category === 'Data & BI'));
});

test('filterRepositories combines category filtering with case-insensitive search', () => {
  const weather = filterRepositories(REPOSITORIES, 'All', 'weather');
  assert.equal(weather.length, 1);
  assert.equal(weather[0].name, 'Weather-Pulse-Real-Time-Streaming-Dashboard-CBE');

  const filteredMismatch = filterRepositories(REPOSITORIES, 'Full-Stack', 'weather');
  assert.equal(filteredMismatch.length, 0);

  const emptySearch = filterRepositories(REPOSITORIES, 'Applied AI', '   ');
  assert.ok(emptySearch.length > 0);
  assert.ok(emptySearch.every((r) => r.category === 'Applied AI'));
});

test('validateContactForm rejects empty or malformed inputs and accepts valid submissions', () => {
  const emptyResult = validateContactForm({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  assert.equal(emptyResult.isValid, false);
  assert.ok(emptyResult.errors.name);
  assert.ok(emptyResult.errors.email);
  assert.ok(emptyResult.errors.subject);
  assert.ok(emptyResult.errors.message);

  const badEmail = validateContactForm({
    name: 'Hiring Manager',
    email: 'invalid-email',
    subject: 'SDE Role',
    message: 'We would love to discuss an engineering opportunity.',
  });
  assert.equal(badEmail.isValid, false);
  assert.ok(badEmail.errors.email);

  const valid = validateContactForm({
    name: 'Hiring Manager',
    email: 'recruiter@company.com',
    subject: 'Full-Stack SDE Opportunity',
    message: 'We saw your ECI and clinical AI work and would like to connect.',
  });
  assert.equal(valid.isValid, true);
  assert.deepEqual(valid.errors, {});
});

test('generateAtsResumePlainText includes key candidate sections and metrics', () => {
  const resume = generateAtsResumePlainText();
  assert.ok(resume.includes('KRISHNA PRIYA S'));
  assert.ok(resume.includes('Nebula KnowLab'));
  assert.ok(resume.includes('8.65 / 10.0'));
  assert.ok(resume.includes('krishnapriyasri04@gmail.com'));
});
