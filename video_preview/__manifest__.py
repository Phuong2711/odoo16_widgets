# -*- coding: utf-8 -*-
{
    'name': 'Video Preview Widget',
    'version': '16.0',
    'summary': 'Video Preview Widget',
    'website': 'https://github.com/Phuong2711/odoo16_widgets',
    'sequence': 20,
    'description': """
    Video Preview Widget By Phuong2711
    """,
    'depends': [
        'web',
    ],
    'data': [

    ],
    'installable': True,
    'application': False,
    'auto_install': False,
    'assets': {
        'web.assets_backend': [
            '/video_preview/static/src/*.*',
        ],
    },
    'license': 'LGPL-3',
}
