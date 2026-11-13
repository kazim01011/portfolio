import energyAnalysis from '../images/publications/energy-analysis-gas-electricity.png';
import energyReview from '../images/publications/energy-review-keyword-clusters.png';
import iscience from '../images/publications/iscience-spatial-temporal-causal.png';
import explainableGnn from '../images/publications/explainable-gnn-cascade-progression.png';
import linkPrediction from '../images/publications/link-prediction-five-layer-network.png';
import reverseVaccinology from '../images/publications/reverse-vaccinology-predicted-interactions.png';

// Author-supplied screenshots checked against the papers. Keep each paper's
// figure unique. Projects reuse the corresponding publication's verified asset.
// Figure numbers, manuscript versions, and verification sources are recorded in
// docs/publication-figure-sources.md.
const publicationFigures = {
  'pub-1': {
    src: energyAnalysis,
    alt: 'Figure 1: electricity and gas layers with dotted connections between cross-layer hubs in the Belgium energy network',
    caption: 'Fig. 1 · Coupled electricity and gas networks',
  },
  'pub-2': {
    src: energyReview,
    alt: 'Figure 7: bibliometric keyword clusters covering resource optimization, sustainability, network theory and cascading failures, and smart grids',
    caption: 'Fig. 7 · Research themes in multilayer energy networks',
  },
  'pub-3': {
    src: iscience,
    alt: 'Spatial, temporal, and causal substation relation layers from the iScience multilayer GNN paper',
    caption: 'Spatial, temporal, and causal relation layers',
  },
  'pub-4': {
    src: explainableGnn,
    alt: 'Figure 14: four stages of cascading failure in the IEEE-24 grid, with voltage deviation shown by node color and failed lines in red',
    caption: 'Fig. 14 · Cascading failure progression in IEEE-24',
  },
  'pub-7': {
    src: linkPrediction,
    alt: 'Figure 2: the five-layer multiplex energy network used in the link prediction and navigability study',
    caption: 'Fig. 2 · Five-layer multiplex energy network',
  },
  'pub-8': {
    src: reverseVaccinology,
    alt: 'Predicted protein interaction subgraph from the revised Flavobacterium reverse-vaccinology manuscript, with nodes colored by Biomni priority tier',
    caption: 'Predicted protein interaction network',
  },
};

export default publicationFigures;
