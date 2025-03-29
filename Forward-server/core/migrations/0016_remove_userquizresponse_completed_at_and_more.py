# Generated by Django 5.1.6 on 2025-03-28 19:54

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0015_userquizresponse_completion_percentage'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='userquizresponse',
            name='completed_at',
        ),
        migrations.RemoveField(
            model_name='userquizresponse',
            name='started_at',
        ),
        migrations.AddField(
            model_name='userquestionresponse',
            name='time_spent',
            field=models.IntegerField(blank=True, help_text='The total time spent on this question', null=True),
        ),
        migrations.AddField(
            model_name='userquizresponse',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='userquizresponse',
            name='time_spent',
            field=models.IntegerField(blank=True, help_text='The total time spent on this question', null=True),
        ),
        migrations.AddField(
            model_name='userquizresponse',
            name='updated_at',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
