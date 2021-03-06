if(typeof(ss) == 'undefined' || typeof(ss.i18n) == 'undefined') {
	console.error('Class ss.i18n not defined');
} else {
	ss.i18n.addDictionary('de_DE', {
		'GridFieldBulkTools.FINISH_CONFIRM': "Ihre Änderungen sind nicht gespeichert. Wenn sie fortfahren gehen diese Daten verloren.\n\nMöchten Sie fortfahren?",
		'GridFieldBulkTools.EDIT_CHANGED': 'Geändert',
		'GridFieldBulkTools.EDIT_UPDATED': 'Gespeichert',
		'GridFieldBulkManager.BULKACTION_EMPTY_SELECT': 'Sie müssen mindestens ein Element auswählen',
		'GridFieldBulkManager.CONFIRM_DESTRUCTIVE_ACTION': 'Wollen Sie dieses Element wirklich unwiderruflich löschen?'
	});
}
