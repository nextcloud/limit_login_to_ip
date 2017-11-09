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
						var ipRanges = textData.split(',');
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

						OCA.LimitLoginToIp.Settings.setEnabledState(true);
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

		setEnabledState: function(isEnabled) {
			if(isEnabled !== true) {
				$('#limit-login-to-ip-list-spinner').removeClass('hidden');
			} else {
				$('#limit-login-to-ip-list-spinner').addClass('hidden');
			}

			$('#limit-login-to-ip-input-fields input').prop('disabled', !isEnabled);
		}
	};

})(OCA);

(function () {
	OCA.LimitLoginToIp.Settings.load();

	$('#limit-login-to-ip-submit').click(function() {
		var ipAddress = $('#limit-login-to-ip-whitelist').val();
		var range = $('#limit-login-to-ip-whitelist_mask').val();
		OCA.LimitLoginToIp.Settings.setEnabledState(false);
		OCA.LimitLoginToIp.Settings.addRange(ipAddress + '/' + range);
		$('#limit-login-to-ip-whitelist').val('');
		$('#limit-login-to-ip-whitelist_mask').val();
	});

	$('#limit-login-to-ip-list').on('click', 'a', function() {
		var rangeToRemove = $(this).attr('data');
		OCA.LimitLoginToIp.Settings.setEnabledState(false);
		OCA.LimitLoginToIp.Settings.removeRange(rangeToRemove);
	});
})();
