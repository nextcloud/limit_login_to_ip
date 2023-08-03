/**
 * @copyright Copyright (c) 2017 Lukas Reschke <lukas@statuscode.ch>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

(function(OCA) {
	OCA.LimitLoginToIp = OCA.LimitLoginToIp || {};
	OCA.LimitLoginToIp.Ranges = [];
	OCA.LimitLoginToIp.UIDs = [];

	/**
	 * @namespace OCA.LimitLoginToIp.Settings
	 */
	OCA.LimitLoginToIp.Settings = {
		load: function() {
			OCP.AppConfig.getValue(
				'limit_login_to_ip',
				'whitelisted.ranges',
				'',
				{
					success: function(data) {
						var textData =  $(data).find('data data').text();
						var ipRanges;
						if( textData === '')
							ipRanges = []
						else
							ipRanges = textData.split(',');
						var table = document.getElementById('limit-login-to-ip-list');
						table.innerHTML = '';

						OCA.LimitLoginToIp.Ranges = ipRanges;
						ipRanges.forEach(function(range) {
							var row = table.insertRow(0);
							var actionCell = row.insertCell(0);
							actionCell.className = 'action-column';
							var ipCell = row.insertCell(0);

							var ipCellValue = document.createElement('span');
							ipCellValue.innerText = range;
							ipCell.innerHTML = ipCellValue.outerHTML;

							var actionCellValue = document.createElement('span');
							var deleteLink = document.createElement('a');
							deleteLink.className = 'icon-delete has-tooltip';
							deleteLink.title = t('limit_login_to_ip', 'Delete');
							deleteLink.setAttribute('data', range);
							actionCellValue.innerHTML = deleteLink.outerHTML;
							actionCell.innerHTML = actionCellValue.outerHTML;
						});

						OCA.LimitLoginToIp.Settings.setIPEnabledState(true);
					}
				}
			);
			OCP.AppConfig.getValue(
				'limit_login_to_ip',
				'whitelisted.uids',
				'',
				{
					success: function(data) {
						var textData =  $(data).find('data data').text();
						var UIDs;
						if( textData === '')
							UIDs = []
						else
							UIDs = textData.split(',');
						var table = document.getElementById('limit-login-to-ip-uidlist');
						table.innerHTML = '';

						OCA.LimitLoginToIp.UIDs = UIDs;
						UIDs.forEach(function(uid) {
							var row = table.insertRow(0);
							var actionCell = row.insertCell(0);
							actionCell.className = 'action-column';
							var uidCell = row.insertCell(0);

							var uidCellValue = document.createElement('span');
							uidCellValue.innerText = uid;
							uidCell.innerHTML = uidCellValue.outerHTML;

							var actionCellValue = document.createElement('span');
							var deleteLink = document.createElement('a');
							deleteLink.className = 'icon-delete has-tooltip';
							deleteLink.title = t('limit_login_to_ip', 'Delete');
							deleteLink.setAttribute('data', uid);
							actionCellValue.innerHTML = deleteLink.outerHTML;
							actionCell.innerHTML = actionCellValue.outerHTML;
						});

						OCA.LimitLoginToIp.Settings.setUIDEnabledState(true);
					}
				}
			);
		},

		storeRanges: function() {
			var ranges = OCA.LimitLoginToIp.Ranges.join();
			OCP.AppConfig.setValue(
				'limit_login_to_ip',
				'whitelisted.ranges',
				ranges,
				{
					success: function () {
						OCA.LimitLoginToIp.Settings.load();
					}
				}
			);
		},

		addRange: function(range) {
			OCA.LimitLoginToIp.Ranges.push(range);
			OCA.LimitLoginToIp.Settings.storeRanges();
		},

		removeRange: function(range) {
			var index = OCA.LimitLoginToIp.Ranges.indexOf(range);
			OCA.LimitLoginToIp.Ranges.splice(index, 1);
			OCA.LimitLoginToIp.Settings.storeRanges();
		},

		storeUIDs: function() {
			var uids = OCA.LimitLoginToIp.UIDs.join();
			OCP.AppConfig.setValue(
				'limit_login_to_ip',
				'whitelisted.uids',
				uids,
				{
					success: function () {
						OCA.LimitLoginToIp.Settings.load();
					}
				}
			);
		},

		addUID: function(uid) {
			OCA.LimitLoginToIp.UIDs.push(uid);
			OCA.LimitLoginToIp.Settings.storeUIDs();
		},

		removeUID: function(uid) {
			var index = OCA.LimitLoginToIp.UIDs.indexOf(uid);
			OCA.LimitLoginToIp.UIDs.splice(index, 1);
			OCA.LimitLoginToIp.Settings.storeUIDs();
		},

		setIPEnabledState: function(isEnabled) {
			if(isEnabled !== true) {
				$('#limit-login-to-ip-list-spinner').removeClass('hidden');
			} else {
				$('#limit-login-to-ip-list-spinner').addClass('hidden');
			}

			$('#limit-login-to-ip-input-fields input').prop('disabled', !isEnabled);
		},

	        setUIDEnabledState: function(isEnabled) {
			if(isEnabled !== true) {
				$('#limit-login-to-ip-uidlist-spinner').removeClass('hidden');
			} else {
				$('#limit-login-to-ip-uidlist-spinner').addClass('hidden');
			}

			$('#limit-login-to-ip-uid-input-fields input').prop('disabled', !isEnabled);
		}
	};

})(OCA);

(function () {
	OCA.LimitLoginToIp.Settings.load();

	$('#limit-login-to-ip-submit').click(function() {
		var ipAddress = $('#limit-login-to-ip-whitelist').val();
		var range = $('#limit-login-to-ip-whitelist_mask').val();

                // ipAddress validation
		// https://www.regexpal.com/?fam=104038
                var regexFilter = '((^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$)|(^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$))';
                var regexMatch = new RegExp(regexFilter).exec(ipAddress);

		// If ipAddress doesn't look like IPv4 and IPv6 address do nothing
		if ( regexMatch == null ) {
                        return false;
                }

		OCA.LimitLoginToIp.Settings.setIPEnabledState(false);
		OCA.LimitLoginToIp.Settings.addRange(ipAddress + '/' + range);
		$('#limit-login-to-ip-whitelist').val('');
		$('#limit-login-to-ip-whitelist_mask').val();
	});

	$('#limit-login-to-ip-list').on('click', 'a', function() {
		var rangeToRemove = $(this).attr('data');
		OCA.LimitLoginToIp.Settings.setIPEnabledState(false);
		OCA.LimitLoginToIp.Settings.removeRange(rangeToRemove);
	});

	$('#limit-login-to-ip-uid-submit').click(function() {
		var uid = $('#limit-login-to-ip-uid-whitelist').val();

		OCA.LimitLoginToIp.Settings.setUIDEnabledState(false);
		OCA.LimitLoginToIp.Settings.addUID(uid);
		$('#limit-login-to-ip-uid-whitelist').val('');
	});

	$('#limit-login-to-ip-uidlist').on('click', 'a', function() {
		var uidToRemove = $(this).attr('data');
		OCA.LimitLoginToIp.Settings.setUIDEnabledState(false);
		OCA.LimitLoginToIp.Settings.removeUID(uidToRemove);
	});
})();
