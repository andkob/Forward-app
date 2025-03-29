# Generated by Django 5.1.6 on 2025-03-28 23:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0016_remove_userquizresponse_completed_at_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='text_size',
            field=models.CharField(default='txt-base', max_length=8, verbose_name='text size preference'),
        ),
        migrations.AlterField(
            model_name='user',
            name='theme',
            field=models.CharField(default='light', max_length=13, verbose_name='theme preference'),
        ),
    ]
