# Generated by Django 5.1.6 on 2025-03-24 20:22

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0013_alter_userquestionresponse_question_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userquestionresponse',
            name='question',
            field=models.ForeignKey(help_text='The question that was answered', on_delete=django.db.models.deletion.CASCADE, related_name='user_responses', to='core.question'),
        ),
        migrations.AlterField(
            model_name='userquestionresponse',
            name='quiz_response',
            field=models.ForeignKey(help_text='The parent quiz response this question response belongs to', on_delete=django.db.models.deletion.CASCADE, related_name='question_responses', to='core.userquizresponse'),
        ),
    ]
