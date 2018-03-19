angular.module('bacanaApp').controller('publicationController', ctrl);

function ctrl($scope, $ocLazyLoad) {
	$ocLazyLoad.load('https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js');

	$scope.pub = [
		{
			year: 2018,
			title: 'Human sperm swimming in a high viscosity mucus analogue',
			authors: 'Kenta Ishimoto, Hermes Gadêlha, Eamonn A. Gaffney, David J. Smith & Jackson Kirkman-Brown',
			detail: 'Journal of Theoretical Biology, (February 2018)',
			link: 'https://www.sciencedirect.com/science/article/pii/S0022519318300651',
			if: 'n/a',
			altmetric: '10.1016/j.jtbi.2018.02.013'
		},
		{
			year: 2017,
			title: 'The counterbend dynamics of cross-linked filament bundles and flagella',
			authors: 'R. Coy & H. Gadelha',
			detail: 'Journal Royal Society Interface (in press)',
			link: 'http://arxiv.org/abs/1703.04179',
			if: 3.917,
			altmetric: '10.1098/rsif.2017.0065'
		},
		{
			year: 2017,
			title: 'Coarse-graining the fluid flow around a human sperm',
			authors: 'K. Ishimoto, H. Gadêlha, E. A. Gaffney, D. J. Smith & J. Kirkman-Brown',
			detail: 'Physical Review Letters 118, 124501 (2017)',
			link: 'https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.118.124501',
			if: 8.462,
			altmetric: '10.1103/physrevlett.118.124501'
		},
		{
			year: 2017,
			title: 'Nonlinear amplitude dynamics in flagellar beating.',
			authors: 'D. Oriola, H. Gadelha & J Casademunt',
			detail: 'Royal Society Open Science 4, 160698 (2017)',
			link: 'http://rsos.royalsocietypublishing.org/content/4/3/160698',
			if: 2.243,
			altmetric: '10.1098/rsos.160698'
		},
		{
			year: 2016,
			title: 'Development of tip-splitting and side-branching patterns in elastic fingering',
			authors: 'J.V. Fontana, H. Gadelha & J.A. Miranda',
			detail: 'Physical Review E 93, 033126 (2016)',
			link: 'http://journals.aps.org/pre/abstract/10.1103/PhysRevE.93.033126',
			if: 2.366
		},
		{
			year: 2015,
			title: 'Fock space, symbolic algebra, and analytical solutions for small stochastic systems.',
			authors: 'F.A.N. Santos, H. Gadelha & E.A. Gaffney',
			detail: 'Physical Review E 92, 062714 (2015)',
			link: 'http://journals.aps.org/pre/abstract/10.1103/PhysRevE.92.062714',
			if: 2.366,
			altmetric: '10.1103/PhysRevE.92.062714'
		},
		{
			year: 2015,
			title: 'Spermatozoa scattering by a microchannel feature: an elastohydrodynamic model.',
			authors: 'T.D. Montenegro-Johnson, H. Gadelha & D.J. Smith',
			detail: 'Royal Society Open Science 2 (3), 140475 (2015)',
			link: 'http://rsos.royalsocietypublishing.org/content/2/3/140475.abstract',
			if: 2.243
		},
		{
			year: 2015,
			title: 'Water Flux Dynamics in Closed-Loop, Batch-Mode Forward Osmosis Systems.',
			authors: 'G. Gadelha, H. Gadelha & N.P. Hankins',
			detail: 'Journal of Membrane Science 476,457–468 (2015)',
			link: 'http://www.sciencedirect.com/science/article/pii/S0376738814009004',
			if: 6.13
		},
		{
			year: 2014,
			title: 'Stationary patterns in centrifugally-driven interfacial elastic fingering.',
			authors: 'G.D. Carvalho, H. Gadelha & J.A. Miranda',
			detail: 'Physical Review E 90, 063009 (2014) ',
			link: 'http://journals.aps.org/pre/abstract/10.1103/PhysRevE.90.063009',
			if: 2.366
		},
		{
			year: 2014,
			title: 'The mechanics of hyperactivation in adhered human sperm.',
			authors: 'E.H. Ooi, D.J. Smith, H. Gadelha, E.A. Gaffney & J. Kirkman-Brown',
			detail: 'Royal Society Open Science 1, 140230 (2014)',
			link: 'http://rsos.royalsocietypublishing.org/content/1/2/140230',
			if: 2.243,
			altmetric: '10.1098/rsos.140230'
		},
		{
			year: 2014,
			title: 'Subharmonic oscillations of collective molecular motors.',
			authors: 'D. Oriola, H. Gadelha, C. Blanch-Mercader & J. Casademunt',
			detail: 'Europhysics Letters 107, 18002 (2014)',
			subDetail: 'Editor\'s choice for Highlight collection',
			link: 'http://dx.doi.org/10.1209/0295-5075/107/18002',
			if: 1.957
		},
		{
			year: 2014,
			title: 'Elastic fingering in rotating Hele-Shaw flows.',
			authors: 'G.D. Carvalho, H. Gadelha & J. A. Miranda',
			detail: 'Physical Review E 89, 053019 (2014)',
			link: 'https://journals.aps.org/pre/abstract/10.1103/PhysRevE.89.053019',
			if: 2.366,
			altmetric: '10.1103/PhysRevE.89.053019'
		},
		{
			year: 2013,
			title: 'Interfacial elastic fingering in Hele-Shaw cells: A weakly nonlinear study.',
			authors: 'G.D. Carvalho, J.A. Miranda & H. Gadelha',
			detail: 'Physical Review E 88, 053006 (2013)',
			link: 'http://pre.aps.org/abstract/PRE/v88/i5/e053006',
			if: 2.366
		},
		{
			year: 2013,
			title: 'The counterbend phenomenon in flagellar axonemes and cross-linked filament bundles.',
			authors: 'H. Gadelha, E.A. Gaffney & A. Goriely',
			detail: 'Proceedings of the National Academy of Sciences 110 (30), 12180 (2013).',
			link: 'http://www.pnas.org/content/early/2013/07/03/1302113110',
			if: 9.661,
			subDetail: 'Approx. 10K downloads'
		},
		{
			year: 2013,
			title: 'On the optimal shape of magnetic swimmers.',
			authors: 'H. Gadelha',
			detail: 'Regular Chaotic Dynamics 18, 75-84 (2013).',
			link: 'http://link.springer.com/article/10.1134/S156035471301005X',
			if: 1.562
		},
		{
			year: 2011,
			title: 'Comment to the Article by Jens Elgeti, U. Benjamin Kaupp and Gerhard Gomppert: Hydrodynamics of sperm cells near surfaces.',
			authors: 'D.J. Smith, E.A. Gaffney, H. Shum, H. Gadelha & J.C. Kirkman-Brown.',
			detail: 'Biophysical Journal 100, 2318 (2011)',
			link: 'http://www.cell.com/biophysj/abstract/S0006-3495%2811%2900327-4',
			if: 3.632
		},
		{
			year: 2011,
			title: 'Mammalian Sperm Motility: Observation and Theory.',
			authors: 'E.A. Gaffney, H. Gadelha, D.J. Smith, J.R. Blake & J.C. Kirkman-Brown.',
			detail: 'Annual Review of Fluid Mechanics 43, 501 (2011).',
			link: 'http://www.annualreviews.org/doi/full/10.1146/annurev-fluid-121108-145442',
			if: 11.163
		},
		{
			year: 2010,
			title: 'Coriolis effects on rotating Hele-Shaw flows: A conformal mapping approach.',
			authors: 'J.A. Miranda, H. Gadelha, A. Dorsey',
			detail: 'Physical Review E 82, 066306 (2010)',
			link: 'http://pre.aps.org/abstract/PRE/v82/i6/e066306',
			if: 2.366
		},
		{
			year: 2010,
			title: 'Non-linear instability in flagellar dynamics: A novel modulation mechanism in sperm migration?',
			authors: 'H. Gadelha, E.A. Gaffney, D.J. Smith & J.C. Kirkman-Brown.',
			detail: 'Journal of the Royal Society Interface 7, 1689 (2010). ',
			link: 'http://rsif.royalsocietypublishing.org/content/early/2010/05/10/rsif.2010.0136',
			if: 3.917,
			subDetail: 'over 4K downloads'
		},
		{
			year: 2009,
			title: 'Effects of normal viscous stresses on radial viscous fingering',
			authors: 'H. Gadelha & J.A. Miranda',
			detail: 'Physical Review E 79, 066312 (2009)',
			link: 'http://link.aps.org/doi/10.1103/PhysRevE.79.066312/',
			if: 2.366
		},
		{
			year: 2009,
			title: 'Bend propagation in the flagella of migrating human sperm, and its modulation by viscosity',
			authors: 'D.J. Smith, E.A. Gaffney, H. Gadelha, N. Kapur & J.C. Kirkman-Brown',
			detail: 'Cell Motility and the Cytoskeleton 66, 220-236 (2009) ',
			link: 'http://onlinelibrary.wiley.com/doi/10.1002/cm.20345/abstract',
			if: 3.071
		},
		{
			year: 2008,
			title: 'Coriolis effects on fingering patterns under rotation',
			authors: 'E. Alvarez-Lacalle, H. Gadelha & J.A. Miranda',
			detail: 'Physical Review E 78, 026305 (2008)',
			link: 'http://link.aps.org/doi/10.1103/PhysRevE.78.026305',
			if: 2.366,
			subDetail: 'selected for a special section \"Kaleidoscope\"'
		},
		{
			year: 2008,
			title: 'Radial viscous fingering in miscible Hele-Shaw flows: A numerical study',
			authors: 'Ching-Yao Chen, C.-W. Huang, H. Gadelha & J.A. Miranda',
			detail: 'Physical Review E 78, 016306 (2008)',
			link: 'http://link.aps.org/doi/10.1103/PhysRevE.78.016306',
			if: 2.366,
			subDetail: 'selected for a special section \"Kaleidoscope\"'
		},
		{
			year: 2007,
			title: 'Dynamics of viscous fingers in rotating Hele-Shaw cells with Coriolis effects',
			authors: 'H. Gadelha, N. Brito & J.A. Miranda',
			detail: 'Physical Review E 75, 016305 (2007)',
			link: 'http://link.aps.org/doi/10.1103/PhysRevE.75.016305',
			if: 2.366
		},
		{
			year: 2004,
			title: 'Finger competition dynamics in rotating Hele-Shaw cells',
			authors: 'H. Gadelha & J.A. Miranda',
			detail: 'Physical Review E 70, 066308 (2004) ',
			link: 'http://link.aps.org/doi/10.1103/PhysRevE.70.066308',
			if: 2.366
		}
	]


	function sortOn(collection, name) {
		collection.sort(
			function (a, b) {
				if (a[name] <= b[name]) {
					return (1);
				}

				return (-1);
			}
		);
	}

	$scope.groupBy = function (attribute) {

		// First, reset the groups.
		$scope.groups = [];

		// Now, sort the collection of friend on the
		// grouping-property. This just makes it easier
		// to split the collection.
		sortOn($scope.pub, attribute);

		// I determine which group we are currently in.
		var groupValue = "_INVALID_GROUP_VALUE_";

		// As we loop over each friend, add it to the
		// current group - we'll create a NEW group every
		// time we come across a new attribute value.
		for (var i = 0; i < $scope.pub.length; i++) {

			var pub = $scope.pub[i];

			// Should we create a new group?
			if (pub[attribute] !== groupValue) {

				var group = {
					label: pub[attribute],
					pubs: []
				};

				groupValue = group.label;

				$scope.groups.push(group);

			}

			// Add the friend to the currently active
			// grouping.
			group.pubs.push(pub);
		}
	};

	// I am the grouped collection. Each one of these
	// will contain a sub-collection of friends.
	$scope.groups = [];

	$scope.groupBy( 'year' );
};