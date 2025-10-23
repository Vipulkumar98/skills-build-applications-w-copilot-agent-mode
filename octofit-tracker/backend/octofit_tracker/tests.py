from django.test import TestCase
from .models import User, Team, Activity, Workout, Leaderboard

class ModelSmokeTest(TestCase):
    def test_team_create(self):
        team = Team.objects.create(name='Test Team')
        self.assertEqual(str(team), 'Test Team')
    def test_user_create(self):
        team = Team.objects.create(name='Test Team')
        user = User.objects.create(name='Test User', email='test@example.com', team=team)
        self.assertEqual(str(user), 'Test User')
    def test_activity_create(self):
        team = Team.objects.create(name='Test Team')
        user = User.objects.create(name='Test User', email='test@example.com', team=team)
        activity = Activity.objects.create(user=user, type='run', duration=30, date='2025-01-01')
        self.assertEqual(str(activity), 'Test User - run on 2025-01-01')
    def test_workout_create(self):
        team = Team.objects.create(name='Test Team')
        workout = Workout.objects.create(name='Pushups')
        workout.suggested_for.add(team)
        self.assertEqual(str(workout), 'Pushups')
    def test_leaderboard_create(self):
        team = Team.objects.create(name='Test Team')
        leaderboard = Leaderboard.objects.create(team=team, total_points=100)
        self.assertIn('Leaderboard for', str(leaderboard))
